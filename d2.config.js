const config = {
    type: 'app',
    name: 'cross-program-enrollment-viewer',
    title: 'Cross-Program Enrollment Viewer',
    description: 'A plugin that allows users to view and navigate between enrollments across different programs.',
    version: '1.0.1',
    pluginType: 'TRACKER-ENROLLMENT-PLUGIN',
    
    entryPoints: {
        plugin: './src/Plugin.tsx'
    },
}

module.exports = config
