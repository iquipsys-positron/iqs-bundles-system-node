import { DefaultContainerFactory } from 'pip-services3-container-node';

import { RolesClientFactory as PipServicesRolesClientFactory } from 'pip-clients-roles-node';
import { MessageDistributionClientFactory } from 'pip-clients-msgdistribution-node';
import { AccountsClientFactory } from 'pip-clients-accounts-node';
import { OrganizationsClientFactory } from 'pip-clients-organizations-node';
import { ClustersClientFactory } from 'pip-clients-clusters-node';
import { ServiceAgreementsClientFactory } from 'iqs-clients-agreements-node';
import { InvitationsClientFactory } from 'pip-clients-invitations-node';
import { RolesClientFactory } from 'pip-clients-roles-node';

export class SystemBundleClientsFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new PipServicesRolesClientFactory);
        this.add(new MessageDistributionClientFactory);
        this.add(new AccountsClientFactory);
        this.add(new OrganizationsClientFactory);
        this.add(new ClustersClientFactory);
        this.add(new ServiceAgreementsClientFactory);
        this.add(new InvitationsClientFactory);
        this.add(new RolesClientFactory);

    }

}
