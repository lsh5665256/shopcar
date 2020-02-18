import React from 'react';
import "./Login.scss";

const Login: React.FC = () => {
    return (
        <div className="loginBox">
            <div className="logo">
                <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
            </div>
            <div className="loginMain">
                <div className="loginMain">
                    <div className="inputWrap onePx_bottom">
                        <input type="text" placeholder="请输入手机号码" defaultValue="15323807318" />
                    </div>
                    <div className="inputWrap onePx_bottom">
                        <input type="password" placeholder="请输入登录密码" defaultValue="123456" />
                    </div>
                    <div className="loginBtn">
                        <span>登 录</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;