module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: process.env.AWS_ACCESSKEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
      region: process.env.REGION,
      params: {
        Bucket: process.env.AWS_BUCKET,
        //StorageClass: env("AWS_S3_STORAGE_CLASSES"), // Configure your Amazon S3 Storage Classes (including this to environment variable is not a must)
      },
      logger: console, // Only if you want to `stdout` logs
    },
  },
});
