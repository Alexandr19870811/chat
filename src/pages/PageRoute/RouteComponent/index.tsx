import React from 'react'
import { Route } from 'react-router'
import { RouteProps } from 'react-router-dom'
import MainLayout from 'src/layouts/MainLayout'

type Props = {
    path: string
    component: NonNullable<RouteProps['component']>
}

const RouteComponent: React.FC<Props> = ({ path, component: Component, ...rest }) => (
    <MainLayout>
        <Route path={path} render={(props) => <Component {...props} />} />
    </MainLayout>
)

export default RouteComponent
