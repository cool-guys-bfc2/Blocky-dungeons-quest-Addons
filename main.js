let questDB;
let questCache = {"defeats":0};

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
setValue("defeats",getValue("defeats"));
function update(s)
function start(s) {
    s.on("kill", e => setValue("defeats",getValue("defeats")+1));
    setInterval(() => update(s), 1);
};
module.exports = { init(s) { start(s); } }
