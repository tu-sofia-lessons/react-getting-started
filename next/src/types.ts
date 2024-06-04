import type { RecordModel } from "pocketbase";

export type Blog = {
  title: string;
  content: string;
  views: number;
  thumbnail: string;
} & RecordModel;

export type AboutPageData = {
  content: string;
} & RecordModel;
