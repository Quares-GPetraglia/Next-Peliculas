import React from "react";
import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, fas } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/layout'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

library.add(fab, faCheckSquare, faCoffee, fas)

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const [title, setTitle] = React.useState('');
  
  return (
    <ApolloProvider client={apolloClient}>
      <Layout title={title}>
        <Component {...pageProps} setTitle={setTitle} />
      </Layout>
    </ApolloProvider>
  )
}

export default App