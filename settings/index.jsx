function mySettings(props) {
    return (
        <Page>
            <Section
                title={<Text bold align="center">Fitbit Account</Text>}>
                <Oauth
                    settingsKey="oauth"
                    title="Login"
                    label="Fitbit"
                    status="Login"
                    authorizeUrl="https://www.fitbit.com/oauth2/authorize"
                    requestTokenUrl="https://api.fitbit.com/oauth2/token"
                    clientId="22BNSP"
                    clientSecret="5f09832ca436d0ef605ebf431fe6e6b9"
                    scope="sleep"
                />
            </Section>
        </Page>
    );
}

registerSettingsPage(mySettings);
