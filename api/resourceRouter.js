const router = require("express").Router();

const Resource = require("./models");

router.get("/", async (req, res) => {
  const resources = await Resource.findResources();
  if (resources) res.status(200).json(resources);
  else res.status(500).json({ error: "can't find resources" });
});

router.post("/", async (req, res) => {
  const newResource = await Resource.addResources(req.body);
  if (newResource) res.status(201).json(newResource);
  else res.status(500).json({ error: "can't add resource" });
});

module.exports = router;
