export default {
  async fetch(request, env, ctx) {
    const response = await fetch(request);

    if (response.status === 404) {
      
      const errorPageUrl = "https://humansuperstar.xyz/404.html";
      
      try {
        const customPageResponse = await fetch(errorPageUrl);
        
        if (customPageResponse.ok) {
          const customHtml = await customPageResponse.text();
          
          return new Response(customHtml, {
            status: 404,
            headers: {
              'content-type': 'text/html;charset=UTF-8',
            },
          });
        }
      } catch (err) {
        return new Response("404 Not Found", { status: 404 });
      }
    }

    return response;
  },
};
