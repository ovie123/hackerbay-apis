import jsonpatch from 'jsonpatch';
import { validateJsonInput } from '../validation/jsonPatch.js';

const jsonPath = (req, res) => {
  const { baseJson, jsonPatchObject } = req.body;
  const { errors, isValid } = validateJsonInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const patchedJson = jsonpatch.apply_patch(baseJson, jsonPatchObject);
  return res.status(200).json({
    status: 'success',
    jsonObject: patchedJson,
  });
};

export default jsonPath;
