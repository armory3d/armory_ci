// Auto-generated
let project = new Project('untitled');

project.addSources('Sources');
project.addLibrary("/Users/lubos/Documents/GitHub/blender-build/build/bin/Release/blender.app//armsdk//armory");
project.addLibrary("/Users/lubos/Documents/GitHub/blender-build/build/bin/Release/blender.app//armsdk//iron");
project.addParameter("--macro include('armory.trait')");
project.addParameter("--macro include('armory.trait.internal')");
project.addShaders('build_untitled/compiled/ShaderRaws/Material/Material_mesh.frag.glsl');
project.addShaders('build_untitled/compiled/ShaderRaws/Material/Material_mesh.vert.glsl');
project.addShaders('build_untitled/compiled/ShaderRaws/Material/Material_shadowmap.frag.glsl');
project.addShaders('build_untitled/compiled/ShaderRaws/Material/Material_shadowmap.vert.glsl');
project.addShaders('build_untitled/compiled/Shaders/blur_edge_pass/blur_edge_pass.frag.glsl');
project.addShaders('build_untitled/compiled/Shaders/blur_edge_pass/blur_edge_pass.vert.glsl');
project.addShaders('build_untitled/compiled/Shaders/compositor_pass/compositor_pass.frag.glsl');
project.addShaders('build_untitled/compiled/Shaders/compositor_pass/compositor_pass.vert.glsl');
project.addShaders('build_untitled/compiled/Shaders/deferred_indirect/deferred_indirect.frag.glsl');
project.addShaders('build_untitled/compiled/Shaders/deferred_indirect/deferred_indirect.vert.glsl');
project.addShaders('build_untitled/compiled/Shaders/deferred_light/deferred_light.frag.glsl');
project.addShaders('build_untitled/compiled/Shaders/deferred_light/deferred_light.vert.glsl');
project.addShaders('build_untitled/compiled/Shaders/deferred_light_quad/deferred_light_quad.frag.glsl');
project.addShaders('build_untitled/compiled/Shaders/deferred_light_quad/deferred_light_quad.vert.glsl');
project.addShaders('build_untitled/compiled/Shaders/smaa_blend_weight/smaa_blend_weight.frag.glsl');
project.addShaders('build_untitled/compiled/Shaders/smaa_blend_weight/smaa_blend_weight.vert.glsl');
project.addShaders('build_untitled/compiled/Shaders/smaa_edge_detect/smaa_edge_detect.frag.glsl');
project.addShaders('build_untitled/compiled/Shaders/smaa_edge_detect/smaa_edge_detect.vert.glsl');
project.addShaders('build_untitled/compiled/Shaders/smaa_neighborhood_blend/smaa_neighborhood_blend.frag.glsl');
project.addShaders('build_untitled/compiled/Shaders/smaa_neighborhood_blend/smaa_neighborhood_blend.vert.glsl');
project.addShaders('build_untitled/compiled/Shaders/ssao_pass/ssao_pass.frag.glsl');
project.addShaders('build_untitled/compiled/Shaders/ssao_pass/ssao_pass.vert.glsl');
project.addShaders('build_untitled/compiled/Shaders/world/world.frag.glsl');
project.addShaders('build_untitled/compiled/Shaders/world/world.vert.glsl');
project.addAssets("build_untitled/compiled/ShaderRaws/Material/Material_data.arm");
project.addAssets("build_untitled/compiled/Shaders/blur_edge_pass/blur_edge_pass.arm");
project.addAssets("build_untitled/compiled/Shaders/compositor_pass/compositor_pass.arm");
project.addAssets("build_untitled/compiled/Shaders/deferred_indirect/deferred_indirect.arm");
project.addAssets("build_untitled/compiled/Shaders/deferred_light/deferred_light.arm");
project.addAssets("build_untitled/compiled/Shaders/deferred_light_quad/deferred_light_quad.arm");
project.addAssets("build_untitled/compiled/Shaders/smaa_blend_weight/smaa_blend_weight.arm");
project.addAssets("build_untitled/compiled/Shaders/smaa_edge_detect/smaa_edge_detect.arm");
project.addAssets("build_untitled/compiled/Shaders/smaa_neighborhood_blend/smaa_neighborhood_blend.arm");
project.addAssets("build_untitled/compiled/Shaders/ssao_pass/ssao_pass.arm");
project.addAssets("build_untitled/compiled/Shaders/world/world.arm");
project.addAssets("/Users/lubos/Documents/GitHub/blender-build/build/bin/Release/blender.app//armsdk/armory/Assets/brdf.png");
project.addAssets("/Users/lubos/Documents/GitHub/blender-build/build/bin/Release/blender.app//armsdk/armory/Assets/noise8.png");
project.addAssets("/Users/lubos/Documents/GitHub/blender-build/build/bin/Release/blender.app//armsdk/armory/Assets/smaa_area.png");
project.addAssets("/Users/lubos/Documents/GitHub/blender-build/build/bin/Release/blender.app//armsdk/armory/Assets/smaa_search.png");
project.addAssets("build_untitled/compiled/Assets/Scene.arm");
project.addAssets("build_untitled/compiled/Assets/envmaps/World_irradiance.arm");
project.addAssets("build_untitled/compiled/Assets/materials/World_material.arm");
project.addAssets("build_untitled/compiled/Assets/meshes/mesh_Cube.arm");
project.addDefine('arm_deferred');
project.addDefine('arm_csm');
project.addDefine('rp_hdr');
project.addDefine('rp_renderer=Deferred');
project.addDefine('rp_depthprepass');
project.addDefine('rp_shadowmap');
project.addDefine('rp_shadowmap_size=1024');
project.addDefine('rp_background=World');
project.addDefine('rp_render_to_texture');
project.addDefine('rp_compositornodes');
project.addDefine('rp_antialiasing=SMAA');
project.addDefine('rp_supersampling=1');
project.addDefine('rp_gi=Off');
project.addDefine('rp_ssgi=SSAO');
project.addDefine('arm_shaderload');
project.addDefine('arm_soundcompress');


resolve(project);
