import {
  AWS_REGION,
  AWS_USER_POOL_CLIENT_ID,
  AWS_USER_POOL_ID,
  AWS_USER_S3_BUCKET,
} from "@env";

interface IAWSAmplifyFederatedConfiguration {
  google_client_id?: string;
  facebook_app_id?: string;
  amazon_client_id?: string;
}

interface IAWSAmplifyCloudLogicConfiguration {
  [index: number]: {
    endpoint: string;
    name: string;
    region: string;
  };
}

interface IAWSAmplifyConfiguration {
  aws_appsync_authenticationType?: string;
  aws_appsync_graphqlEndpoint?: string;
  aws_appsync_region?: string;
  aws_cognito_identity_pool_id?: string;
  aws_cognito_region?: string;
  aws_cloud_logic_custom?: IAWSAmplifyCloudLogicConfiguration;
  aws_project_region: string;
  aws_user_files_s3_bucket?: string;
  aws_user_files_s3_bucket_region?: string;
  aws_user_pools_id?: string;
  aws_user_pools_web_client_id?: string;
  aws_user_pools_web_client_secret?: string;
  federated?: IAWSAmplifyFederatedConfiguration;
}

export const awsconfig: IAWSAmplifyConfiguration = {
  aws_cognito_region: AWS_REGION,
  aws_project_region: AWS_REGION,
  aws_user_files_s3_bucket: AWS_USER_S3_BUCKET,
  aws_user_files_s3_bucket_region: AWS_REGION,
  aws_user_pools_id: AWS_USER_POOL_ID,
  aws_user_pools_web_client_id: AWS_USER_POOL_CLIENT_ID,
};
