import AwsAuthPage from "../components/awsAuthPage";
import HomePage from "./homepage";
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);
const Home = () => {
  return (
    <div className="bg-my-bg-image bg-cover bg-center bg-blend-darken bg-green-200 text-black h-screen overflow-scroll z-100">
      <AwsAuthPage />
      {/* HomePage */}
      {/* <section id="hero" className="snap-start ">
        < HomePage />
      </section> */}

    </div>
  );
};

export default withAuthenticator(Home);