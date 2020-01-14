import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { SystemBundleServicesFactory } from '../build/SystemBundleServicesFactory';
import { SystemBundleClientsFactory } from '../build/SystemBundleClientsFactory';

export class SystemBundleProcess extends ProcessContainer {

    public constructor() {
        super("iqs-bundles-system", "System bundle for iQuipsys Positron");
        this._factories.add(new SystemBundleServicesFactory);
        this._factories.add(new SystemBundleClientsFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
