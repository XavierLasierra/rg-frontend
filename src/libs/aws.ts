import {
  AWS_REGION,
  AWS_USER_POOL_CLIENT_ID,
  AWS_USER_POOL_ID,
  AWS_USER_S3_BUCKET,
} from "@env";

export const awsconfig = {
  Auth: {
    identityPoolId: AWS_USER_POOL_ID,
    region: AWS_REGION,
    userPoolId: AWS_USER_POOL_ID,
    mandatorySignIn: false,
    userPoolWebClientId: AWS_USER_POOL_CLIENT_ID,
  },
  Storage: {
    bucket: AWS_USER_S3_BUCKET,
    region: AWS_REGION,
    identityPoolId: AWS_USER_POOL_ID,
  },
};
