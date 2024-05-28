const BASE_URL = 'https://cfd7-112-77-116-137.ngrok-free.app';

export const updateNickname = async (userId, nickname) => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/${userId}/nickname`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nickname })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const updateEmail = async (userId, email) => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/${userId}/email`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const updatePassword = async (userId, password) => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/${userId}/password`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const updateShortBio = async (developerId, shortBio) => {
    try {
        const response = await fetch(`${BASE_URL}/api/developer/${developerId}/shortBio`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ shortBio })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const updateIntroduction = async (developerId, introduction) => {
    try {
        const response = await fetch(`${BASE_URL}/api/developer/${developerId}/Introduction`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ introduction })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const uploadDeveloperFiles = async (developerId, files) => {
    try {
        const formData = new FormData();
        files.forEach(file => formData.append('files', file));

        const response = await fetch(`${BASE_URL}/api/developer/${developerId}/files`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const updateClientName = async (clientId, clientName) => {
    try {
        const response = await fetch(`${BASE_URL}/api/client/${clientId}/clientName`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ clientName })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const updateClientInfo = async (clientId, clientInfo) => {
    try {
        const response = await fetch(`${BASE_URL}/api/client/${clientId}/clientInfo`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ clientInfo })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const uploadClientFiles = async (clientId, files) => {
    try {
        const formData = new FormData();
        files.forEach(file => formData.append('files', file));

        const response = await fetch(`${BASE_URL}/api/client/${clientId}/files`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const uploadFiles = async (files) => {
    try {
        const formData = new FormData();
        files.forEach(file => formData.append('files', file));

        const response = await fetch(`${BASE_URL}/files/upload`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};
