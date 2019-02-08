export default function ({ $axios } : any) {
  // Defining Content-Type and others in request headers
  $axios.defaults.headers.common.Accept = 'application/json';
  $axios.defaults.headers.common['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  $axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  $axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;

  $axios.onRequest((config: any) => {
    // Stringify data on each non GET request
    // And inject query params in data
    // config.transformRequest = [
    //   (data) => {
    //     if (!data) return
    //     return JSON.stringify(data)
    //   }
    // ]
    console.log(`Making request to ${config.url}`) // eslint-disable-line
  });

  // $axios.onResponse(response => debugger) // eslint-disable-line

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
