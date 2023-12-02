import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Image
        className="rounded-full"
        src="/profile/next.svg"
        alt="プロフィール画像"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-3 ml-10">
        <div className="text-center text-5xl">Next.js 開発</div>
        <div className="text-left">自己紹介</div>
        <div className="leading-lg">
          初めまして。
          <br />
          エンジニア？？です。
          <br />
        </div>
        <div className="flex gap-5">
          <Link href="/hobby">
            <div className="flex justify-center items-center text-center box-border h-20 w-20 rounded-full shadow-xl bg-yellow-300 hover:bg-yellow-200">
              趣味
            </div>
          </Link>
          <Link href="/work">
            <div className="flex justify-center items-center text-center box-border h-20 w-20 rounded-full shadow-xl bg-red-300 hover:bg-red-200">
              お仕事
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
