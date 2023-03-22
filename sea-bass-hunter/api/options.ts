<<<<<<< HEAD
const options = {
  weather: [
    { id: 1, description: "晴れ" },
    { id: 2, description: "曇り" },
    { id: 3, description: "雨" },
    { id: 4, description: "雪" },
    { id: 5, description: "風強し" },
  ],
  clarity: [
    { id: 1, description: "濁り" },
    { id: 2, description: "やや濁り" },
    { id: 3, description: "普通" },
    { id: 4, description: "やや透明" },
    { id: 5, description: "透明" },
  ],
  bait: [
    { id: 1, description: "小魚" },
    { id: 2, description: "エビ" },
    { id: 3, description: "カニ" },
    { id: 4, description: "ウミウシ" },
    { id: 5, description: "昆虫" },
  ],
  time: [
    { id: 1, description: "朝" },
    { id: 2, description: "昼" },
    { id: 3, description: "夕方" },
    { id: 4, description: "夜" },
    { id: 5, description: "深夜" },
  ],
  season: [
    { id: 1, description: "春" },
    { id: 2, description: "夏" },
    { id: 3, description: "秋" },
    { id: 4, description: "冬" },
    { id: 5, description: "梅雨" },
  ],
  location: [
    { id: 1, description: "堤防" },
    { id: 2, description: "サーフ" },
    { id: 3, description: "磯" },
    { id: 4, description: "河川" },
    { id: 5, description: "湖" },
=======
import { Options } from "../types";

const options: Options = {
  weather: [
    { id: 1, label: "晴れ" },
    { id: 2, label: "曇り" },
    { id: 3, label: "雨" },
  ],
  clarity: [
    { id: 1, label: "澄んでいる" },
    { id: 2, label: "やや濁っている" },
    { id: 3, label: "濁っている" },
  ],
  bait: [
    { id: 1, label: "小魚" },
    { id: 2, label: "エビ" },
    { id: 3, label: "カニ" },
>>>>>>> b3525221641c727ae36b993334a4800829568f3c
  ],
};

export default options;
