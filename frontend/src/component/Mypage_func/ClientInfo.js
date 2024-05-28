import React, { useState } from "react";
import '../Mypage.css';
import { updateClientInfo, uploadClientFiles } from '../../mypageApi';

export default function ClientInfo (){
    const [clientInfo, setClientInfo] = useState({
        clientname: "",
        clientinfo: "",
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClientInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update client information
            const updatedClientInfo = await updateClientInfo(clientInfo.clientId, clientInfo);
            console.log("Client info updated:", updatedClientInfo);

            // Upload file if selected
            if (file) {
                const uploadedFile = await uploadClientFiles(clientInfo.clientId, [file]);
                console.log("File uploaded:", uploadedFile);
            }

            // Clear form fields after successful submission
            setClientInfo({
                clientname: "",
                clientinfo: "",
            });
            setFile(null);
        } catch (error) {
            console.error("Error updating client info:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>의뢰처 이름</li><br></br>
                    <li>
                        <input 
                            className="block" 
                            type="text" 
                            name="clientname"
                            value={clientInfo.clientname} 
                            onChange={handleChange}
                            required
                        />
                    </li>
                </ul>
                <ul>
                    <li>의뢰처 정보</li><br></br>
                    <li>
                        <textarea 
                            className="block-long" 
                            type="text"
                            name="clientinfo"
                            value={clientInfo.clientinfo} 
                            onChange={handleChange}
                            required
                        />
                    </li>
                </ul>
                <ul>
                    <li>
                        <label htmlFor="file" className="attachment">
                            <input 
                                id="file"
                                type="file" 
                                name="file"
                                onChange={handleFileChange}
                            />
                        </label>
                    </li>
                    <br></br>
                </ul>
                <button className="submitPage" type="submit">제출</button>
            </form>
        </div>
    );
}
