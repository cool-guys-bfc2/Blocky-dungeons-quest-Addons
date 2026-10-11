let questDB;
let questCache = {};

function getValue(key) {
    return questCache[key];
}

function setValue(key, value) {
    questCache[key] = value;

    const request = indexedDB.open("Quest Database", 1);

    request.onupgradeneeded = () => {
        request.result.createObjectStore("data");
    };

    request.onsuccess = () => {
        const db = request.result;
        const tx = db.transaction("data", "readwrite");
        tx.objectStore("data").put(value, key);
        tx.oncomplete = () => db.close();
    };
}

function start(s) {
};
module.exports = { init(s) { start(s); } }
