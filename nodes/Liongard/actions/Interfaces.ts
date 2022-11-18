import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type LiongardMap = {
    alert: 'get';
};

export type Liongard = AllEntities<LiongardMap>;

export type LiongardAlert = Entity<LiongardMap, 'alert'>;

export type AlertProperties = PropertiesOf<LiongardAlert>;
