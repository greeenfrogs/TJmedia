import React, { useState } from "react";
import '../Mypage.css';
import { updateIntroduction, uploadDeveloperFiles, updateShortBio } from '../../mypageApi';

export default function DeveloperInfo() {
    const [developerInfo, setDeveloperInfo] = useState({
        developerintro: "",
        developerportfolio: "",
    });
    const [file, setFile] = useState(null);
    const developerId = 1; // 예시로 개발자 ID를 설정

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeveloperInfo(prevState => ({
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
            // Update introduction
            await updateIntroduction(developerId, developerInfo.developerportfolio);

            // Update short bio
            await updateShortBio(developerId, developerInfo.developerintro);

            // Upload file if exists
            if (file) {
                await uploadDeveloperFiles(developerId, [file]);
            }

            alert('정보가 성공적으로 업데이트되었습니다.');
        } catch (error) {
            console.error('업데이트 중 문제가 발생했습니다:', error);
            alert('업데이트 중 문제가 발생했습니다.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>개발자 한 줄 소개</li>
                    <br />
                    <li>
                        <input 
                            className="block" 
                            type="text" 
                            name="developerintro"
                            value={developerInfo.developerintro} 
                            onChange={handleChange}
                            required
                        />
                    </li>
                </ul>
                <ul>
                    <li>자기소개서(포트폴리오)</li><br />
                    <li>
                        <textarea 
                            className="block-long" 
                            type="text" 
                            name="developerportfolio"
                            value={developerInfo.developerportfolio} 
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
                    <br />
                </ul>
                <button className="submitPage" type="submit">제출</button>
            </form>
        </div>
    );
}
