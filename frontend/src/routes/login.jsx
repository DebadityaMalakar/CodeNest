import { Title } from "@solidjs/meta"
export default function login(){
    return (
        <>
        <Title>Login</Title>
        <div class="uk-alert-danger" uk-alert id="errorC" style="display: none;">
            <a href class="uk-alert-close" uk-close></a>
            <p id="errorMsg" style="font-size: 40px;">Error!</p>
        </div>
        <div class="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport>
            <div class="uk-width-1-1">
                <div class="uk-container">
                    <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                        <div class="uk-width-1-1@m">
                            <div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                                <h3 class="uk-card-title uk-text-center">Welcome back!</h3>
                                <form method="post" id="signupform" >
                                    <div class="uk-margin">
                                        <div class="uk-inline uk-width-1-1">
                                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                                            <input id="username" class="uk-input uk-form-large" type="text" placeholder="Username"/>
                                        </div>
                                    </div>
                                    <div class="uk-margin">
                                        <div class="uk-inline uk-width-1-1">
                                            <span class="uk-form-icon" uk-icon="icon: lock"></span>
                                            <input id="password" class="uk-input uk-form-large" type="password" placeholder="password"/>	
                                        </div>
                                    </div>
                                    <div class="uk-margin">
                                        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button>
                                    </div>
                                    <div class="uk-text-small uk-text-center">
                                        Not registered? <a href="/signup">Create an account</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}