import jwt from "jsonwebtoken";

//admin authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    // const  {dToken}  = req.headers;
       const dToken =
      req.headers.dtoken ||
      req.headers.dToken ||
      req.headers.authorization;
    console.log("Received Token:", dToken);
    if (!dToken) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    const token_decode = jwt.verify(dToken, process.env.JWT_SECRET);
    if (!req.body) req.body = {}; 
    req.body.docId = token_decode.id;
    next();
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export default authDoctor;
