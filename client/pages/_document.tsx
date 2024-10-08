import { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from 'next/document';
import {
    DocumentHeadTags,
    DocumentHeadTagsProps,
    documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter';

const MyDocument = (props: DocumentProps & DocumentHeadTagsProps) => {
    return (
        <Html lang="en">
            <Head>
                <DocumentHeadTags {...props} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => await documentGetInitialProps(ctx);

export default MyDocument;
