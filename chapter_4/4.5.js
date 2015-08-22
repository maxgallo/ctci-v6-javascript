/*
4.5
Validate BST
*/

function isValidBst(root) {
    return validateBst(root, null, null);
}

function validateBst(root, min, max) {
    if (root === null) {
        return true;
    }

    if ((min !== null && root.value <= min) || (max !== null && root.value > max)) {
        return false;
    }

    if (!validateBst(root.left, min, root.value) || !validateBst(root.right, root.value, max)) {
        return false;
    }

    return true;
}
