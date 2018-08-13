import {
  chain,
  noop,
  Rule,
  SchematicContext,
  Tree
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  addModuleImportToRootModule,
  addPackageJsonDependency,
  getProjectFromWorkspace,
  getWorkspace,
  NodeDependency,
  NodeDependencyType
} from '@balticcode/ngx-schematics-utils';

import { Schema } from './schema';

function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [{ type: NodeDependencyType.Dependencies, version: '^2.2.0', name: 'ngx-localstorage' }];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(host, dependency);
      context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
    });

    return host;
  };
}

function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍 Installing packages...`);
    return host;
  };
}

function addModuleToImports(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);

    const project = getProjectFromWorkspace(
      workspace,
      // Takes the default project in case it's not provided by CLI
      options.project ? options.project : workspace.defaultProject
    );
    const moduleName = 'NgxLocalStorageModule.forRoot()';

    addModuleImportToRootModule(host, moduleName, 'ngx-localstorage', project);
    context.logger.log('info', `✅️ "${moduleName}" is imported`);

    return host;
  };
}

export default function (options: Schema): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : addPackageJsonDependencies(),
    options && options.skipPackageJson ? noop() : installPackageJsonDependencies(),
    options && options.skipModuleImport ? noop() : addModuleToImports(options)
  ]);
}
