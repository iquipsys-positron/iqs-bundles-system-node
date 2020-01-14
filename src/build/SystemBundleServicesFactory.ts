import { DefaultContainerFactory } from 'pip-services3-container-node';

import { ClustersServiceFactory } from 'pip-services-clusters-node';
import { ServiceAgreementsServiceFactory } from 'iqs-services-agreements-node';
import { InvitationsServiceFactory } from 'pip-services-invitations-node';
import { RolesServiceFactory } from 'pip-services-roles-node';

export class SystemBundleServicesFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new ClustersServiceFactory);
        this.add(new ServiceAgreementsServiceFactory);
        this.add(new InvitationsServiceFactory);
        this.add(new RolesServiceFactory);

    }

}
