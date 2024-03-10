import { releaseChangelog, releaseVersion } from 'nx/release';
import * as yargs from 'yargs';
import { setActiveProject, saveActiveProject, createProject, NgMorphTree, getSourceFile } from 'ng-morph';

(async () => {
  const options = await yargs
    .version(false) // don't use the default meaning of version in yargs
    .option('version', {
      description: 'Explicit version specifier to use, if overriding conventional commits',
      type: 'string'
    })
    .option('verbose', {
      description: 'Whether or not to enable verbose logging, defaults to false',
      type: 'boolean',
      default: false
    })
    .parseAsync();

  const { workspaceVersion, projectsVersionData } = await releaseVersion({
    specifier: options.version,
    dryRun: false,
    verbose: options.verbose,
    stageChanges: true,
    gitCommit: false,
    gitTag: false
  });

  // replace VERSION_PLACEHOLDER
  const ngxLocalstorageVersion = projectsVersionData['ngx-localstorage']['newVersion'];
  updateVersionPlaceholder(ngxLocalstorageVersion);

  await releaseChangelog({
    versionData: projectsVersionData,
    version: workspaceVersion,
    dryRun: false,
    verbose: options.verbose,
    stageChanges: true,
    gitCommit: false,
    gitTag: false
  });
  process.exit();
})();

function updateVersionPlaceholder(version: string) {
  setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts']));

  const sourceFile = getSourceFile('libs/ngx-localstorage/src/lib/version.ts');
  const versionDeclaration = sourceFile?.getVariableDeclaration('VERSION');
  versionDeclaration?.setInitializer(`new Version('${version}')`);

  saveActiveProject();
}
