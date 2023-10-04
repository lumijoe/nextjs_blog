//メタデータの編集のためHeadコンポーネントをimport(<head>タグに変換される)
/* 
   <title>サイト/ページタイトル
   <meta description=...>サイト/ページの説明(120文字程度)
   <meta property=...>SNSシェア時にサイト/ページ情報を表示するOGPタグ>
   <link href=...>CSSやCDNの読み込み
*/
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout'


export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">← Back to home</Link>
            </h2>
        </Layout>
    );
}