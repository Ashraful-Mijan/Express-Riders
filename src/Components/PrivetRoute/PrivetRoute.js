import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { logContext } from '../../App';

const PrivetRoute = ({ children, ...rest }) => {
    const [logInfo, setLogInfo] = useContext(logContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                logInfo.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivetRoute;