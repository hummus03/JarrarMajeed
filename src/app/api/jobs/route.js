export async function GET(request) {
    return Response.json([
      {
        title: "Huffman Project",
        desc: "Developed algorithms that encode and decode text using lossless data compression logic"
      },
      {
        title: "Huffman Encoding Project",
        desc: "Built a binary tree to store nodes containing text data"
      },
      {
        title: "Tree Project",
        desc: "Traversed tree to generate Huffman code used for encoding/decoding text"
      },
      {
        title: "Prefix Project",
        desc: "Programmed algorithms that can take in infix/prefix expressions and convert them to postfix expressions"
      },
    ]);
  }