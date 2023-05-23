export type ChannelItem = {
  id: number;
  name: string;
};
export type ResChannels = {
  data: {
    channels: ChannelItem[];
  };
  message: string;
};
export type ArticleItem = {
  art_id: string;
  aut_id: string;
  aut_name: string;
  comm_count: number;
  cover: {
    type: number;
    images: string[];
  };
  is_top: number;
  pubdate: string;
  title: string;
};
export type ResArticles = {
  data: {
    pre_timestamp: string;
    results: articleItem[];
  };
  message: string;
};
