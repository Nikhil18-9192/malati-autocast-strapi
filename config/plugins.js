module.exports = {
  upload: {
    provider: "google-cloud-storage",
    providerOptions: {
      bucketName: "malati-autocast.appspot.com",
      publicFiles: true,
      uniform: false,
      serviceAccount: {
        type: "service_account",
        project_id: "malati-autocast",
        private_key_id: "b62393971cf10b1896b59f3bb0eae60afaa5d413",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDY4F+/V07h3TD\nOObMMhPpHXC1MS89iBBFSQfEyV5WBlpfYVM255YUg0QJnbsAE9JLl6Uylj3lNFgM\njs6Dj5mdTkhRJ2ehTkWSjledDeys2L1R3F7tV2tL8F0mIVHnrVKcJghsCIgOLX9S\naK/P79n9mcfBeah50KgpTi81Cl2Wx7MobGRhGtK6afZLNfQi0W+yL5LFHgCgCR2O\nzSvPs1gOFZwPnLLQbJ2eBbvAReB9JvGmk354dOgN4EAmN2c0cmbprbQThAnZAJwK\nmLJbP/0qthHEpssfwpnzohpJ8PtlprsD/v0BmDg/51xYYfy35tYnVX/lvdAE8iDx\n20J3MlAPAgMBAAECggEAH/Ti5au3zM2LTdtnzYb1QF/geBTKzAQN298lcPdEbB/O\n4SG7E/74Sh5BXwHtZ1ur6KbX+I2fzaCW3rrupjrdiN/DA9maNpo61nexzGNOIzkH\nFzVKpgPxwx0AMdp/mbunMsMlBn0LZPzmVvVTUq2WgvFcvVVSC6u9DUBsh9QhrtAX\nz8aYT/OX67McZqeTFrnECClxWWYaHYsoR5qEnBG5fajSXlborizwOdyxVDiK7wsq\nYC3i9zk/akIXHwroiZVXNuTZSbA6pKm1xXOgwaBMpdAtr6KIFzV6hL41O2JAxhH7\nIcgKQQN8av6p3bLFJ/3s4Bh6RU7tfGfpEvDjKGW1EQKBgQDpruX+yf04aylpZOpl\n5NQP8sf4CUEVa5VWEQvINMj9KE9Rxb5wnMIJkvtyiNKMqQTd9x7XfTniSHQplbfj\n4nCptBkD8tk683eNue1DIyjC0xsH30ffC+ITQBwUZYly4JfPdjRhyQsZY4/OUKI9\nJNCjAzaooB4RCv0+NZWODv9GUQKBgQDWDGGJ+q3RCO9uxMF5HUDak6KnxhwqRNuE\nI2wMoN/RMZy3grEPJkPX1RcI+hLhIq/CB0ip9tGqnelMdi+iOrg4MbbWLTep0g7j\nERZIbDjxxj+pXE7Ry+EnVZftlLXl83jgiJGfyQjtvtEDG+c2/gOJyOwJXTdDDe/2\nVcxiON24XwKBgEl8H4Vk/YU9ZbNn8bIDKJCvVyTvvBDBWR/Mknjt6Hp7r53WYlHF\nadta5kmZLyTejdJDQOag0ZAQGr9s/nviHG2xXeB5AMjiASmHW04ug0Xo3uo108MX\nWIuXMH1VhMikSfkKgeRyNVRRk8pcXvh9WEK64vhaCbpwSzzB2vrmSm5RAoGAaxTS\njwZ7gkGoFpAUAhUiZrbI/onbeUHtV5Oo8EBi9/KL5jpZfay07/rIhVMlsr95keW2\n8mBpz6MkHX5aohwiIOqt/0Orvyc5D1ty/FQ3wKxfGMj3HXmTb+wgD1kADsPYyutH\nftpBvz5grd99skMtXfbILn8VsFP+oguWLeUo9p0CgYEAiYgUspMy0uAAs4eAzpiE\nQ6qVcQPnsfVdiBglHWH28CsLwGDL1Mm0JqLxcAXirEm4eFC7sq6t9J4x8OKbtnO/\nQxol3+CBXmnRScfhO4BI5d+TS4ynmgz0queMC/lk12t9nQMXDLIWweayETyIRsWa\nGQ0b9jRNayQVgELe1MtU1D8=\n-----END PRIVATE KEY-----\n",
        client_email:
          "firebase-adminsdk-3uj53@malati-autocast.iam.gserviceaccount.com",
        client_id: "106873228723688087214",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3uj53%40malati-autocast.iam.gserviceaccount.com",
      }, // replace `{}` with your serviceAccount JSON object
      baseUrl: "https://storage.googleapis.com/malati-autocast.appspot.com",
      basePath: "strapi",
    },
  },
  //...
};
