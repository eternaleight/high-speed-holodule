import { useState, useEffect } from "react";

const THUMB_TYPES = [
  /** w1280 */
  'maxresdefault.jpg',
  /** w640 */
  'sddefault.jpg',
  /** w480 */
  'hqdefault.jpg',
  /** w320 */
  'mqdefault.jpg',
  /** w120 */
  'default.jpg',
];

export const getYtThumbnail = async (videoId: any) => {
  // 画像をロードする処理
  const loadImage = (src: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = (e) => resolve(img);
      img.src = src;
    });
  };

  for (let i = 0; i < THUMB_TYPES.length; i++) {
    const fileName = `https://img.youtube.com/vi/${videoId}/${THUMB_TYPES[i]}`;

      const res: any = await loadImage(fileName);

    // ダミー画像じゃなかったら（横幅が121px以上だったら）
    // もしくは、これ以上小さい解像度が無かった場合は、このURLで決定
    if (
      !THUMB_TYPES[i + 1]
        || (res).width > 120
    ) {
      return fileName;
    }
  }
};

(async () => {
 const urltest = await getYtThumbnail('sqEd2W6TEgk')
 console.log(urltest)
})()

const aaa = () => {


  const [holoData, setHoloData] = useState<any>([])
  const holoUrl = 'https://holodex.net/api/v2/live/'
  useEffect(() => {
    async function HoloApi() {
      const res = await fetch(holoUrl)
      const users = await res.json()
      setHoloData(users)
       console.log(users)
      return res
    } HoloApi()
  },[holoUrl]);

  
  const [mapUrl, setMapUrl] = useState([])
  useEffect(() => {
    const update = () => {
      setMapUrl(
        holoData.filter(
          (holoDatas2: any) => (
            holoDatas2.channel.org === "Hololive" &&
              holoDatas2.status === "upcoming" &&
              holoDatas2.channel.id !== 'UCKeAhJvy8zgXWbh9duVjIaQ' &&
              holoDatas2.channel.id !== 'UCZgOv3YDEs-ZnZWDYVwJdmA' &&
              holoDatas2.channel.id !== 'UC9mf_ZVpouoILRY9NUIaK-w' &&
              holoDatas2.channel.id !== 'UCNVEsYbiZjH5QLmGeSgTSzg' &&
              holoDatas2.channel.id !== 'UCGNI4MENvnsymYjKiZwv9eg' &&
              holoDatas2.channel.id !== 'UCANDOlYTJT7N5jlRC3zfzVA' &&
              holoDatas2.channel.id !== 'UChSvpZYRPh0FvG4SJGSga3g' &&
              holoDatas2.channel.id !== 'UCwL7dgTxKo8Y4RFIKWaf8gA' &&
              holoDatas2.channel.id !== 'UC6t3-_N8A6ME1JShZHHqOMw' &&
              holoDatas2.channel.id !== '' &&
              holoDatas2.channel.id !== 'UCc88OV45ICgHbn3ZqLLb52w' &&
              holoDatas2.channel.id !== 'UCgRqGV1gBf2Esxh0Tz1vxzw' &&
              holoDatas2.channel.id !== 'UCkT1u65YS49ca_LsFwcTakw' &&
              holoDatas2.channel.id !== 'UCdfMHxjcCc2HSd9qFvfJgjg' &&
              holoDatas2.channel.id !== '' &&
              holoDatas2.channel.id !== 'UCWsfcksUUpoEvhia0_ut0bA') ? getYtThumbnail(holoDatas2.channel.id) : null )
      );
    };
      update()
  },[])
  console.log(mapUrl,'🔥')
}

