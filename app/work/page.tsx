import Link from 'next/link';

const Work = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="leading-lg">
          <br />
            メインフレーム上の制御ソフトウェア開発、保守
          <br />
          <br />
            Javaの業務アプリケーション開発、保守
          <br />
            現在：システムマイグレーション等
          <br />      
      </div>
      <Link href="/">Homeへ</Link>
    </div>
  );
}

export default Work;