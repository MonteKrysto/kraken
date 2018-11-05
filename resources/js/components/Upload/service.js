export const saveFiles = async (files) => {
    let formData = new FormData();
    files.map(file => formData.append('file[]', file));
    const config = {
        method: 'POST',
        body: formData,
    };
    const res = await fetch('/api/upload', config);
    return await res.json();

};