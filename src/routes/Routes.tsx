import { Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { SuspenseFallback } from '../components/SuspenseFallback/SuspenseFallback';

import { PrivateRoute } from '../hocs/PrivateRoute';

import { routesConfig } from './routesConfig';

export const Routes = () => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Layout>
        <Switch>
          {routesConfig.map(({ component: Component, path, roles }) => (
            <Route
              key={path}
              path={path}
              element={
                <PrivateRoute roles={roles}>
                  <Component />
                </PrivateRoute>
              }
            />
          ))}
        </Switch>
      </Layout>
    </Suspense>
  );
};
