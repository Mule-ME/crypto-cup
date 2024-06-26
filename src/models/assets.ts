import { Schema, model, Document } from 'mongoose';

interface IAssets extends Document {
  assetName?: string;
  assetImage: string;
  lastTrade: string;
  percentChange: string;
  usdChange: string;
}

const AssetsSchema = new Schema<IAssets>(
  {
    assetName: {
      type: String,
    },
    assetImage: {
      type: String,
      required: true,
    },
    lastTrade: {
      type: String,
      required: true,
    },
    percentChange: {
      type: String,
      required: true,
    },
    usdChange: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Assets = model<IAssets>('Assets', AssetsSchema);
export default Assets;
