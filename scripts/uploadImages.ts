import fetch from 'cross-fetch';
import { PlatformMvcDbObject } from '@DAO';
import * as fs from 'fs';
import { ObjectID } from 'mongodb';
import getDb from './getDb';
import { storage } from './firebaseAdmin';

const getPlatformMap = async (): Promise<Record<string, string>> => {
  const platforms = {};
  const res = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
    query {
      allPlatforms {
        id
        name
      }
    }
    `,
    }),
  });

  const json = await res.json();

  json.data.allPlatforms.forEach((data) => {
    platforms[data.name] = data.id;
  });

  return platforms;
};

const uploadImage = async (fileName: string): Promise<any> => {
  const bucket = storage.bucket('sidehustle-stack.appspot.com/');
  await bucket.upload(`./raw-images/${fileName}`, {
    destination: `images/${fileName}`,
  });
  return `https://firebasestorage.googleapis.com/v0/b/sidehustle-stack.appspot.com/o/images%2F${encodeURIComponent(
    fileName
  )}?alt=media&token=87fa129a-43c1-4616-90ee-6d08af32ca0d`;
};

const readAllFiles = async (): Promise<string[]> =>
  new Promise((res) => {
    fs.readdir('./raw-images', (error, fileNames) => {
      if (error) throw error;

      res(fileNames);
    });
  });

const uploadAndUpdate = async () => {
  const db = await getDb();
  const platformCollection = db.collection<PlatformMvcDbObject>('Platform');

  const platforms = await getPlatformMap();
  console.log(platforms);

  const files = await readAllFiles();

  let numUploaded = 0;

  await Promise.all(
    files.map(async (file) => {
      const fileName = file.slice(0, -4).toLowerCase();
      const platformName = Object.keys(platforms).find((a) =>
        a.toLowerCase().includes(fileName)
      );

      if (platformName && platforms[platformName]) {
        const url = await uploadImage(file);

        await new Promise((res) =>
          platformCollection
            .findOneAndUpdate(
              {
                _id: ObjectID.createFromHexString(platforms[platformName]),
              },
              {
                $set: {
                  companyLogo: url,
                },
              },
              {
                upsert: true,
                returnOriginal: false,
              }
            )
            .then((data) => {
              res(data);
            })
        );

        numUploaded += 1;
      }
    })
  );

  console.log(`Uploaded ${numUploaded} images and platforms`);
};

uploadAndUpdate();

// readAllFiles().then((files) => console.log(files));

// uploadImage('Buy me a Coffee.jpg').then((url) => {
//   console.log(url);
// });

//
// fs.readdir(rawImagesFolder, (err, files) => {
//   files.forEach((file) => {
//     console.log(file);
//   });
// });
