import { Square2StackIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const now_date = new Date();
  const after_four_days = new Date(
    now_date.getTime() + 4 * 24 * 60 * 60 * 1000,
  );

  const formatDateJP = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${year}年${month}月${day}日${hours}時${minutes}分`;
  };

  const formatDateJP2 = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}年${month}月${day}日`;
  };

  const price = 5000;

  const now_str = formatDateJP(now_date);
  const after_four_days_str = formatDateJP(after_four_days);
  const now_str2 = formatDateJP2(now_date);
  const after_four_days_str2 = formatDateJP2(after_four_days);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        style={{ backgroundColor: "#EF7B7A" }}
        className="absolute inset-0 z-0"
      />
      <div
        className="absolute inset-0 z-[1] opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: `10px 10px, 10px 10px`,
          backgroundPosition: `0 0, 5px 5px`,
        }}
      />
      <div className="relative z-10 h-full w-full overflow-auto flex flex-col items-center gap-2 p-5">
        <div className="absolute top-5 left-2">
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-2 mx-auto overflow-hidden">
            <img
              src="/icon.jpeg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-sm font-bold text-center text-white">
            受け取りリンク
          </div>
          <div className="text-sm font-bold text-center text-white">
            {now_str}
          </div>
        </div>
        <div className="text-6xl flex items-center justify-center pt-6 pb-36 text-white">
          {price}
          <span className="text-3xl px-2 font-bold pt-2 text-white">円</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xs font-bold border bg-amber-400 text-center w-fit mx-auto border-white rounded-full py-1 px-3 text-white">
            受け取り待ち
          </div>
          <div className="text-xs font-bold text-white">
            受け取り期限 {after_four_days_str}
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full mb-4 mt-2">
          <div
            className="text-xs font-bold border border-white rounded-full py-2 my-2 px-3 w-full flex items-center justify-between text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            https://pay.paypay.ne.jp/cRHaijoaw4wt
            <span className="flex items-center gap-1">
              <Square2StackIcon className="h-4 w-4 transform scale-x-[-1] text-white" />
              コピー
            </span>
          </div>
          <div className="w-full text-center font-bold text-white text-sm border-2 border-white rounded-lg py-2 px-4 bg-blue-400">
            受け取る
          </div>
          <div
            className="w-full text-center font-bold text-white text-sm border-2 border-white rounded-lg py-2 px-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            辞退する
          </div>
        </div>

        <div className="border-t border-white w-full pt-4">
          <div
            className="w-full rounded-lg p-4 flex flex-col gap-2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <div className="text-sm text-white font-bold">詳細</div>

            <div className="text-xs text-white flex items-center justify-between">
              PayPayマネー
              <span className="font-bold">
                {price}
                <span className="ml-1">円</span>
              </span>
            </div>
            <div className="text-xs text-white flex items-center justify-between">
              PayPayマネーライト
              <span className="font-bold">
                0<span className="ml-1">円</span>
              </span>
            </div>

            <div className="border-t border-white w-full pt-4 flex flex-col gap-2">
              <div className="text-xs text-white flex items-center justify-between">
                送信日<span className="font-bold">{now_str2}</span>
              </div>
              <div className="text-xs text-white flex items-center justify-between">
                有効期限
                <span className="font-bold">{after_four_days_str2}</span>
              </div>
              <div className="text-xs text-white flex items-center justify-between">
                取引番号
                <span className="flex items-center gap-1 font-bold">
                  09328632437605947203458
                  <Square2StackIcon className="h-5 w-5 transform scale-x-[-1]" />
                </span>
              </div>
              <div className="text-xs text-white text-center my-1">
                PayPay 株式会社 資金移動業者 関東財務局長 第 00359 号
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
