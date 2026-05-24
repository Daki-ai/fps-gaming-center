import { useState, useEffect } from "react";

export interface SteamNewsItem {
  gid: string;
  title: string;
  url: string;
  is_external_url: boolean;
  author: string;
  contents: string;
  feedlabel: string;
  date: number;
  feedname: string;
  feed_type: number;
  appid: number;
}

interface SteamNewsResponse {
  appnews: {
    appid: number;
    newsitems: SteamNewsItem[];
    count: number;
  };
}

const CS2_NEWS_URL = "https://cs2-news-proxy.dariscamovic2.workers.dev/";

export const useCS2News = () => {
  const [news, setNews] = useState<SteamNewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(CS2_NEWS_URL);

        if (!response.ok) {
          throw new Error("Proxy returned " + response.status);
        }

        const data: SteamNewsResponse = await response.json();

        if (mounted) {
          setNews(data.appnews?.newsitems || []);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          const msg = err instanceof Error ? err.message : "Unknown error";
          setError(msg);
          setLoading(false);
        }
      }
    };

    fetchNews();

    return () => {
      mounted = false;
    };
  }, []);

  return { news, loading, error };
};

export const cleanSteamContent = (raw: string, maxLen: number = 180): string => {
  if (!raw) return "";
  let cleaned = raw
    .replace(/\[img\][^\[]*\[\/img\]/gi, "")
    .replace(/\[url=[^\]]*\]([^\[]*)\[\/url\]/gi, "$1")
    .replace(/\[\/?[a-z]+[^\]]*\]/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/https?:\/\/[^\s]+/g, "")
    .replace(/\\+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (cleaned.length > maxLen) {
    cleaned = cleaned.substring(0, maxLen).trim() + "...";
  }
  return cleaned;
};