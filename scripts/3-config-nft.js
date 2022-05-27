import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0xb4E03ebbb9602CE62F244431B576053de0E465cE"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Catgirl Kaguya",
        description: "This NFT will give you access to CatgirlsDAO!",
        image: readFileSync("scripts/assets/catgirl.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
