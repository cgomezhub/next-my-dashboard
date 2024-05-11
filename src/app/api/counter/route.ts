import internal from "stream";

export async function GET(request: Request) {
 

    console.log({method: request.method,  });
 
    return Response.json({
    count: 50,
  });
}
export async function POST(request: Request) {
 

    console.log({metod: request.method});
 
    return Response.json({
    count: 800,
    message: "POST"

  });
}