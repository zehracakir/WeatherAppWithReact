import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter className='footer mt-5'>
            <h4 className='text-center'>Öneri ve görüşleriniz için ulaşabilirsiniz</h4>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4 '>
                    <div align="center">
                        <a href="https://www.linkedin.com/in/zehra-%C3%A7ak%C4%B1r-625350204/" target="_blank">
                            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo" />
                        </a>
                        <a href="https://instagram.com/_zehrackr_" target="_blank">
                            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" width="52" height="40" alt="instagram logo" />
                        </a>
                        <a href="https://medium.com/@zehra-cakir" target="_blank">
                            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" width="52" height="40" alt="hackerrank logo" />
                        </a>
                    </div>
                </section>
            </MDBContainer>
            <hr />
            <div className='text-center p-3'>
                © 2023 Copyright:
                <a href='https://github.com/zehracakir'>
                    Zehra ÇAKIR
                </a>
            </div>
        </MDBFooter>
    );
}