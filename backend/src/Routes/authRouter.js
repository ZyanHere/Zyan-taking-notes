import express from "express";

const router = express.Router();

router.post("/signup", signup); // signup

router.post("/login", login); // login

export default router;