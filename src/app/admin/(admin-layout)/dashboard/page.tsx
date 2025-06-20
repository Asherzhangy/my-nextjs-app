'use client';
import React from 'react';
import { Tabs, Image, Badge, Descriptions } from 'antd';
import type { TabsProps, DescriptionsProps } from 'antd';

// 描述信息数据
const items: DescriptionsProps['items'] = [
  {
      key: '1',
      label: '写真',
      children: (
        <div style={{ textAlign: 'center' }}>
          <Image
            src="/Resume.jpg"
            width={120} // 设置合适的宽度
            height={120} // 可选：固定高度，保持比例
            style={{ objectFit: 'cover', borderRadius: 4 }} // 更好的展示效果
          />
        </div>
      ),
    },
  {
    key: '2',
    label: '居住地',
    children: '中国',
  },
  {
    key: '3',
    label: '連絡先',
    children: '電話：150-2263-1422 / メール：asher.zhangy@gmail.com',
  },
  {
    key: '4',
    label: '氏名',
    children: '張森(Zhang Sen)',
  },
  {
    key: '5',
    label: '生年月日',
    children: '2003年(満21歳)',
    // span: 2,
  },
  {
    key: '6',
    label: '学歴',
    children: '2021年9月～2025年6月：南京郵電大学 通信工学部',
    span: 2,
  },
  {
    key: '7',
    label: 'モットー',
    children: <Badge status="processing" text="アドネスと一緒に、教育とテクノロジーで世界を変えよう！" />,
    span: 3,
  },
  {
    key: '8',
    label: '志望職種',
    children: 'フロントエンド・バックエンド・フルスタックエンジニア',
    span: 2
  },
  {
    key: '9',
    label: '希望勤務地',
    children: '東京(柔軟対応可能)',
  },
  {
    key: '10',
    label: '技術スキル',
    children: (
      <>
        フロントエンド：React、Next.js、Vue2 / Vue3、JavaScript（ES6+）、HTML/CSS，TypeScript
        <br />
        バックエンド：Golang、Python、Ruby、Node.js、MySQL、API 設計
        <br />
        共通スキル：非同期通信（Axios / Fetch / Promise）、認証・認可処理、パフォーマンス最適化
        <br />
        開発環境・ツール：Git、Vite、VS Code、Confluence、Postman 
        <br />
        言語：日本語（日常会話〜初中級）、英語（TOEFL クラス助教経験）
        <br />

      </>
    ),
    span:3
  },
];
const items2: DescriptionsProps['items'] = [
    {key: '1',
    label: '技インターンシップ経験',
    children: (
      <>
        南京群頂科技股份有限公司（Nanjing Qunding Technology Co., Ltd.）
        <br />
        フルスタックエンジニア（インターン）   期間：2024 年 5 月～現在
        <br />
        分散型ストレージシステム「TDS」の開発に参画
        <br />
        フロントエンド（Vue3 + ElementPlus）に加え、バックエンド API との連携部分（Node.js/ Golang）も担当
        <br />
        顧客管理、データゲートウェイ、業務管理などのモジュールを設計・実装
        <br />
        UI コンポーネントの共通化、技術文書の作成、コードレビューを実施
        <br />
        スプリントレビューやリリース作業にも積極的に関与
      </>
    ),
    span:3
  },
  {key: '2',
    label: 'プロジェクト経験',
    children: (
      <>
        南郵外語学院・英語学習プラットフォーム（YouTube 風）
        <br />
        技術：React / Vue / Golang / Python / MySQL 
        <br />
        学習用動画再生、音声録音、音声合成機能をフルスタックで開発（Dplayer / Recorder.js/ Python ベースの音声処理）
        <br />
        Golang を用いて高速な API サーバーを構築、動画データの管理やユーザー認証を実装
        <br />
        データベース設計・API 開発・フロント画面連携まで一貫して担当
        <br />
        チーム内で Confluence を活用し、仕様共有・タスク管理・品質改善提案を実施
        <br />
      </>
    ),
    span:3
  },
  {key: '3',
    label: 'その他の経験・強み',
    children: (
      <>
        南郵外語学院の前端技術アシスタント（在籍中）
        <br />
        省刊「电脑知识与技术」に共同執筆（二著） 
        <br />
        TOEFL・IELTS クラスのアシスタント経験あり → コミュニケーション能力、責任感
        <br />
        8日間の海外個人旅行を企画・実行（語学力・行動力・柔軟性）
        <br />
        日本語学習継続中、実務コミュニケーションも迅速に習得可能
        <br />
      </>
    ),
    span:3
  }
];
const items3: DescriptionsProps['items'] = [
    {key: '1',
    label: '志望動機',
    children: (
      <>
      私は大学時代から日本の音楽が大好きで、東京で働くことをずっと夢見てきました。大学生のとき、一人で日本に二回来て、久石譲さんのコンサートを聴きました。その感動から、「東京で働き、好きな音楽を身近に感じながら、充実した人生を送りたい」と思うようになりました。この情熱は、アドネス様の「PLAY YOUR LIFE」のモットーと共鳴します。
        <br />
      音楽だけでなく、日本の技術やチームワークの文化にも魅力を感じます。アドネス様の「Well-Beingを追求し、LTTを最大化させる」哲学に深く共感し、教育とテクノロジーで社会を変える使命に感動しています。御社で働くことで、自分のスキルを伸ばし、「常に基準値を上げる」行動指針に従って成長したいです。新卒として、アドネスのチームの一員になり、日本社会と世界に貢献することを目指します。
      </>
    ),
    span:3
  },
  {key: '2',
    label: '自己 PR',
    children: (
      <>
        大学で通信工学を専攻しながら、独学とインターンでフロントエンドとバックエンドの開発スキルを磨いてきました。ReactやVueを用いたUI開発、GolangやPythonでのAPI設計・実装、MySQLによるデータ管理に自信があります。現在は分散ストレージシステムの開発に携わり、チーム開発やアジャイルなワークフローを経験しています。
        <br />
        アドネス様の「Well-Beingを追求し、LTTを最大化させる」哲学に共感し、教育とテクノロジーで社会を変える使命にワクワクしています。技術的な柔軟性と自走力を活かし、「常に基準値を上げる」行動指針に従って、フルスタックエンジニアとしてスキルプラスやサクセスラーニング®に貢献したいです。新卒として、アドネスのチームで学び、価値を創ることを目指します。 
      </>
    ),
    span:3
  }
];


// Tab 切换事件
const onChange = (key: string) => {
  console.log(key);
};

// 自定义 Tab 1 内容
const Tab1Content = () => (
  <div>
    <Descriptions title="個人情報" bordered items={items} />
  </div>
);
const Tab2Content = () => (
  <div>
    <Descriptions title="実務経験" bordered items={items2} />
  </div>
);
const Tab3Content = () => (
  <div>
    <Descriptions title="志望動機" bordered items={items3} />
  </div>
);

// 所有 Tab 项
const tabItems: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
    children: <Tab1Content />,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: <Tab2Content />,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: <Tab3Content />,
  },
];

// 主组件
const DashboardPage: React.FC = () => (
  <Tabs defaultActiveKey="1" items={tabItems} onChange={onChange} />
);

export default DashboardPage;