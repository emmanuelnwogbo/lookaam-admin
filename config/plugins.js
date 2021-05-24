module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: "AKIAYFQUV6YIM7D7A6RD",
      secretAccessKey: "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",
      region: "eu-west-3",
      params: {
        Bucket: "lookaamadmin",
        //StorageClass: env("AWS_S3_STORAGE_CLASSES"), // Configure your Amazon S3 Storage Classes (including this to environment variable is not a must)
      },
      logger: console, // Only if you want to `stdout` logs
    },
  },
});
