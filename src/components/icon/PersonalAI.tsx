"use client";

import { SVGProps, useEffect, useRef } from "react";

const PersonalAI: React.FC<SVGProps<SVGSVGElement>> = () => {
  const svgGRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svgElement = svgGRef.current;
    if (!svgElement) return;

    const paths = svgElement.querySelectorAll("path");
    const animate = () => {
      // Step 2: Animate one-by-one to yellow
      paths.forEach((path, index) => {
        setTimeout(() => {
          path.style.transition = "fill 0.5s ease";
          path.style.fill = "#16E390";
        }, index * 500); // delay in ms
      });

      // Step 3: Restart the animation after the last one
      const totalDuration = paths.length * 500 + 500;
      setTimeout(() => {
        animate();
      }, totalDuration);
    };

    animate();
  }, []);
  return (
    <svg
      width="208"
      height="200"
      viewBox="0 0 208 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        opacity="0.12"
        d="M134.533 100C134.533 116.607 121.071 130.07 104.464 130.07C87.8563 130.07 74.3936 116.607 74.3936 100C74.3936 83.3929 87.8563 69.9301 104.464 69.9301C121.071 69.9301 134.533 83.3929 134.533 100Z"
        stroke="#3A4ADB"
      />{" "}
      <circle
        opacity="0.12"
        cx="104.463"
        cy="100"
        r="65.8213"
        stroke="#3A4ADB"
      />{" "}
      <g>
        {" "}
        <path
          opacity="0.12"
          d="M203.964 100C203.964 154.952 159.416 199.5 104.464 199.5C49.5115 199.5 4.96387 154.952 4.96387 100C4.96387 45.0477 49.5115 0.5 104.464 0.5C159.416 0.5 203.964 45.0477 203.964 100Z"
          stroke="#3A4ADB"
        />{" "}
        <path
          d="M157.988 93.6426H158.835V106.358H157.988V93.6426Z"
          fill="url(#paint0_linear_200_1496)"
        />{" "}
        <path
          d="M157.988 93.6426H158.835V106.358H157.988V93.6426Z"
          fill="url(#paint1_linear_200_1496)"
        />{" "}
        <path
          d="M156.716 92.3711H157.564V107.629H156.716V92.3711Z"
          fill="url(#paint2_linear_200_1496)"
        />{" "}
        <path
          d="M156.716 92.3711H157.564V107.629H156.716V92.3711Z"
          fill="url(#paint3_linear_200_1496)"
        />{" "}
        <path
          d="M155.445 94.4902H156.292V105.51H155.445V94.4902Z"
          fill="url(#paint4_linear_200_1496)"
        />{" "}
        <path
          d="M155.445 94.4902H156.292V105.51H155.445V94.4902Z"
          fill="url(#paint5_linear_200_1496)"
        />{" "}
        <path
          d="M154.173 96.1855H155.021V103.815H154.173V96.1855Z"
          fill="url(#paint6_linear_200_1496)"
        />{" "}
        <path
          d="M154.173 96.1855H155.021V103.815H154.173V96.1855Z"
          fill="url(#paint7_linear_200_1496)"
        />{" "}
        <path
          d="M152.902 98.7285H153.749V101.272H152.902V98.7285Z"
          fill="url(#paint8_linear_200_1496)"
        />{" "}
        <path
          d="M152.902 98.7285H153.749V101.272H152.902V98.7285Z"
          fill="url(#paint9_linear_200_1496)"
        />{" "}
        <path
          d="M151.63 97.8809H152.478V102.119H151.63V97.8809Z"
          fill="url(#paint10_linear_200_1496)"
        />{" "}
        <path
          d="M151.63 97.8809H152.478V102.119H151.63V97.8809Z"
          fill="url(#paint11_linear_200_1496)"
        />{" "}
        <path
          d="M150.359 94.914H151.206V105.086H150.359V94.914Z"
          fill="url(#paint12_linear_200_1496)"
        />{" "}
        <path
          d="M150.359 94.914H151.206V105.086H150.359V94.914Z"
          fill="url(#paint13_linear_200_1496)"
        />{" "}
        <path
          d="M149.087 90.2519H149.935V109.748H149.087V90.2519Z"
          fill="url(#paint14_linear_200_1496)"
        />{" "}
        <path
          d="M149.087 90.2519H149.935V109.748H149.087V90.2519Z"
          fill="url(#paint15_linear_200_1496)"
        />{" "}
        <path
          d="M147.816 92.7949H148.663V107.205H147.816V92.7949Z"
          fill="url(#paint16_linear_200_1496)"
        />{" "}
        <path
          d="M147.816 92.7949H148.663V107.205H147.816V92.7949Z"
          fill="url(#paint17_linear_200_1496)"
        />{" "}
        <path
          d="M146.544 90.2519H147.392V109.748H146.544V90.2519Z"
          fill="url(#paint18_linear_200_1496)"
        />{" "}
        <path
          d="M146.544 90.2519H147.392V109.748H146.544V90.2519Z"
          fill="url(#paint19_linear_200_1496)"
        />{" "}
        <path
          d="M145.273 94.0664H146.12V105.934H145.273V94.0664Z"
          fill="url(#paint20_linear_200_1496)"
        />{" "}
        <path
          d="M145.273 94.0664H146.12V105.934H145.273V94.0664Z"
          fill="url(#paint21_linear_200_1496)"
        />{" "}
        <path
          d="M144.001 98.3047H144.849V101.695H144.001V98.3047Z"
          fill="url(#paint22_linear_200_1496)"
        />{" "}
        <path
          d="M144.001 98.3047H144.849V101.695H144.001V98.3047Z"
          fill="url(#paint23_linear_200_1496)"
        />{" "}
        <path
          d="M142.73 99.5762H143.577V100.424H142.73V99.5762Z"
          fill="url(#paint24_linear_200_1496)"
        />{" "}
        <path
          d="M142.73 99.5762H143.577V100.424H142.73V99.5762Z"
          fill="url(#paint25_linear_200_1496)"
        />{" "}
        <path
          d="M141.458 99.1524H142.306V100.848H141.458V99.1524Z"
          fill="url(#paint26_linear_200_1496)"
        />{" "}
        <path
          d="M141.458 99.1524H142.306V100.848H141.458V99.1524Z"
          fill="url(#paint27_linear_200_1496)"
        />{" "}
        <path
          d="M140.187 97.0332H141.034V102.967H140.187V97.0332Z"
          fill="url(#paint28_linear_200_1496)"
        />{" "}
        <path
          d="M140.187 97.0332H141.034V102.967H140.187V97.0332Z"
          fill="url(#paint29_linear_200_1496)"
        />{" "}
        <path
          d="M138.915 96.1855H139.763V103.815H138.915V96.1855Z"
          fill="url(#paint30_linear_200_1496)"
        />{" "}
        <path
          d="M138.915 96.1855H139.763V103.815H138.915V96.1855Z"
          fill="url(#paint31_linear_200_1496)"
        />{" "}
        <path
          d="M137.644 94.0664H138.491V105.934H137.644V94.0664Z"
          fill="url(#paint32_linear_200_1496)"
        />{" "}
        <path
          d="M137.644 94.0664H138.491V105.934H137.644V94.0664Z"
          fill="url(#paint33_linear_200_1496)"
        />{" "}
        <path
          d="M136.372 90.2519H137.22V109.748H136.372V90.2519Z"
          fill="url(#paint34_linear_200_1496)"
        />{" "}
        <path
          d="M136.372 90.2519H137.22V109.748H136.372V90.2519Z"
          fill="url(#paint35_linear_200_1496)"
        />{" "}
        <path
          d="M135.101 93.6426H135.948V106.358H135.101V93.6426Z"
          fill="url(#paint36_linear_200_1496)"
        />{" "}
        <path
          d="M135.101 93.6426H135.948V106.358H135.101V93.6426Z"
          fill="url(#paint37_linear_200_1496)"
        />{" "}
        <path
          d="M133.829 94.4902H134.677V105.51H133.829V94.4902Z"
          fill="url(#paint38_linear_200_1496)"
        />{" "}
        <path
          d="M133.829 94.4902H134.677V105.51H133.829V94.4902Z"
          fill="url(#paint39_linear_200_1496)"
        />{" "}
        <path
          d="M132.558 95.3379H133.405V104.662H132.558V95.3379Z"
          fill="url(#paint40_linear_200_1496)"
        />{" "}
        <path
          d="M132.558 95.3379H133.405V104.662H132.558V95.3379Z"
          fill="url(#paint41_linear_200_1496)"
        />{" "}
        <path
          d="M131.286 94.4902H132.134V105.51H131.286V94.4902Z"
          fill="url(#paint42_linear_200_1496)"
        />{" "}
        <path
          d="M131.286 94.4902H132.134V105.51H131.286V94.4902Z"
          fill="url(#paint43_linear_200_1496)"
        />{" "}
        <path
          d="M130.015 93.2187H130.862V106.781H130.015V93.2187Z"
          fill="url(#paint44_linear_200_1496)"
        />{" "}
        <path
          d="M130.015 93.2187H130.862V106.781H130.015V93.2187Z"
          fill="url(#paint45_linear_200_1496)"
        />{" "}
        <path
          d="M128.743 96.1855H129.591V103.815H128.743V96.1855Z"
          fill="url(#paint46_linear_200_1496)"
        />{" "}
        <path
          d="M128.743 96.1855H129.591V103.815H128.743V96.1855Z"
          fill="url(#paint47_linear_200_1496)"
        />{" "}
        <path
          d="M127.472 98.3047H128.319V101.695H127.472V98.3047Z"
          fill="url(#paint48_linear_200_1496)"
        />{" "}
        <path
          d="M127.472 98.3047H128.319V101.695H127.472V98.3047Z"
          fill="url(#paint49_linear_200_1496)"
        />{" "}
        <path
          d="M126.2 99.1524H127.048V100.848H126.2V99.1524Z"
          fill="url(#paint50_linear_200_1496)"
        />{" "}
        <path
          d="M126.2 99.1524H127.048V100.848H126.2V99.1524Z"
          fill="url(#paint51_linear_200_1496)"
        />{" "}
        <path
          d="M159.259 96.6094H160.107V103.391H159.259V96.6094Z"
          fill="url(#paint52_linear_200_1496)"
        />{" "}
        <path
          d="M159.259 96.6094H160.107V103.391H159.259V96.6094Z"
          fill="url(#paint53_linear_200_1496)"
        />{" "}
        <path
          d="M160.531 97.457H161.378V102.543H160.531V97.457Z"
          fill="url(#paint54_linear_200_1496)"
        />{" "}
        <path
          d="M160.531 97.457H161.378V102.543H160.531V97.457Z"
          fill="url(#paint55_linear_200_1496)"
        />{" "}
        <path
          d="M161.802 97.8809H162.65V102.119H161.802V97.8809Z"
          fill="url(#paint56_linear_200_1496)"
        />{" "}
        <path
          d="M161.802 97.8809H162.65V102.119H161.802V97.8809Z"
          fill="url(#paint57_linear_200_1496)"
        />{" "}
        <path
          d="M163.074 98.7285H163.921V101.272H163.074V98.7285Z"
          fill="url(#paint58_linear_200_1496)"
        />{" "}
        <path
          d="M163.074 98.7285H163.921V101.272H163.074V98.7285Z"
          fill="url(#paint59_linear_200_1496)"
        />{" "}
        <path
          d="M164.345 99.5762H165.193V100.424H164.345V99.5762Z"
          fill="url(#paint60_linear_200_1496)"
        />{" "}
        <path
          d="M164.345 99.5762H165.193V100.424H164.345V99.5762Z"
          fill="url(#paint61_linear_200_1496)"
        />{" "}
        <path
          d="M165.617 99.5762H166.464V100.424H165.617V99.5762Z"
          fill="url(#paint62_linear_200_1496)"
        />{" "}
        <path
          d="M165.617 99.5762H166.464V100.424H165.617V99.5762Z"
          fill="url(#paint63_linear_200_1496)"
        />{" "}
        <path
          d="M166.888 99.5762H167.736V100.424H166.888V99.5762Z"
          fill="url(#paint64_linear_200_1496)"
        />{" "}
        <path
          d="M166.888 99.5762H167.736V100.424H166.888V99.5762Z"
          fill="url(#paint65_linear_200_1496)"
        />{" "}
        <path
          d="M168.16 99.1524H169.007V100.848H168.16V99.1524Z"
          fill="url(#paint66_linear_200_1496)"
        />{" "}
        <path
          d="M168.16 99.1524H169.007V100.848H168.16V99.1524Z"
          fill="url(#paint67_linear_200_1496)"
        />{" "}
        <path
          d="M169.431 98.7285H170.279V101.272H169.431V98.7285Z"
          fill="url(#paint68_linear_200_1496)"
        />{" "}
        <path
          d="M169.431 98.7285H170.279V101.272H169.431V98.7285Z"
          fill="url(#paint69_linear_200_1496)"
        />{" "}
        <path
          d="M170.703 97.8809H171.55V102.119H170.703V97.8809Z"
          fill="url(#paint70_linear_200_1496)"
        />{" "}
        <path
          d="M170.703 97.8809H171.55V102.119H170.703V97.8809Z"
          fill="url(#paint71_linear_200_1496)"
        />{" "}
        <path
          d="M171.974 95.3379H172.822V104.662H171.974V95.3379Z"
          fill="url(#paint72_linear_200_1496)"
        />{" "}
        <path
          d="M171.974 95.3379H172.822V104.662H171.974V95.3379Z"
          fill="url(#paint73_linear_200_1496)"
        />{" "}
        <path
          d="M173.246 93.2187H174.093V106.781H173.246V93.2187Z"
          fill="url(#paint74_linear_200_1496)"
        />{" "}
        <path
          d="M173.246 93.2187H174.093V106.781H173.246V93.2187Z"
          fill="url(#paint75_linear_200_1496)"
        />{" "}
        <path
          d="M174.517 94.0664H175.365V105.934H174.517V94.0664Z"
          fill="url(#paint76_linear_200_1496)"
        />{" "}
        <path
          d="M174.517 94.0664H175.365V105.934H174.517V94.0664Z"
          fill="url(#paint77_linear_200_1496)"
        />{" "}
        <path
          d="M175.789 94.914H176.636V105.086H175.789V94.914Z"
          fill="url(#paint78_linear_200_1496)"
        />{" "}
        <path
          d="M175.789 94.914H176.636V105.086H175.789V94.914Z"
          fill="url(#paint79_linear_200_1496)"
        />{" "}
        <path
          d="M177.06 94.0664H177.908V105.934H177.06V94.0664Z"
          fill="url(#paint80_linear_200_1496)"
        />{" "}
        <path
          d="M177.06 94.0664H177.908V105.934H177.06V94.0664Z"
          fill="url(#paint81_linear_200_1496)"
        />{" "}
        <path
          d="M178.332 93.6426H179.179V106.358H178.332V93.6426Z"
          fill="url(#paint82_linear_200_1496)"
        />{" "}
        <path
          d="M178.332 93.6426H179.179V106.358H178.332V93.6426Z"
          fill="url(#paint83_linear_200_1496)"
        />{" "}
        <path
          d="M179.603 91.9472H180.451V108.053H179.603V91.9472Z"
          fill="url(#paint84_linear_200_1496)"
        />{" "}
        <path
          d="M179.603 91.9472H180.451V108.053H179.603V91.9472Z"
          fill="url(#paint85_linear_200_1496)"
        />{" "}
        <path
          d="M180.875 89.8281H181.722V110.172H180.875V89.8281Z"
          fill="url(#paint86_linear_200_1496)"
        />{" "}
        <path
          d="M180.875 89.8281H181.722V110.172H180.875V89.8281Z"
          fill="url(#paint87_linear_200_1496)"
        />{" "}
        <path
          d="M182.146 93.6426H182.994V106.358H182.146V93.6426Z"
          fill="url(#paint88_linear_200_1496)"
        />{" "}
        <path
          d="M182.146 93.6426H182.994V106.358H182.146V93.6426Z"
          fill="url(#paint89_linear_200_1496)"
        />{" "}
        <path
          d="M183.418 96.1855H184.265V103.815H183.418V96.1855Z"
          fill="url(#paint90_linear_200_1496)"
        />{" "}
        <path
          d="M183.418 96.1855H184.265V103.815H183.418V96.1855Z"
          fill="url(#paint91_linear_200_1496)"
        />{" "}
        <path
          d="M184.689 97.0332H185.537V102.967H184.689V97.0332Z"
          fill="url(#paint92_linear_200_1496)"
        />{" "}
        <path
          d="M184.689 97.0332H185.537V102.967H184.689V97.0332Z"
          fill="url(#paint93_linear_200_1496)"
        />{" "}
        <path
          d="M185.961 99.1524H186.808V100.848H185.961V99.1524Z"
          fill="url(#paint94_linear_200_1496)"
        />{" "}
        <path
          d="M185.961 99.1524H186.808V100.848H185.961V99.1524Z"
          fill="url(#paint95_linear_200_1496)"
        />{" "}
        <path
          d="M187.232 98.3047H188.08V101.695H187.232V98.3047Z"
          fill="url(#paint96_linear_200_1496)"
        />{" "}
        <path
          d="M187.232 98.3047H188.08V101.695H187.232V98.3047Z"
          fill="url(#paint97_linear_200_1496)"
        />{" "}
        <path
          d="M188.504 94.0664H189.351V105.934H188.504V94.0664Z"
          fill="url(#paint98_linear_200_1496)"
        />{" "}
        <path
          d="M188.504 94.0664H189.351V105.934H188.504V94.0664Z"
          fill="url(#paint99_linear_200_1496)"
        />{" "}
        <path
          d="M189.775 90.2519H190.623V109.748H189.775V90.2519Z"
          fill="url(#paint100_linear_200_1496)"
        />{" "}
        <path
          d="M189.775 90.2519H190.623V109.748H189.775V90.2519Z"
          fill="url(#paint101_linear_200_1496)"
        />{" "}
        <path
          d="M191.047 92.7949H191.894V107.205H191.047V92.7949Z"
          fill="url(#paint102_linear_200_1496)"
        />{" "}
        <path
          d="M191.047 92.7949H191.894V107.205H191.047V92.7949Z"
          fill="url(#paint103_linear_200_1496)"
        />{" "}
        <path
          d="M191.894 90.2519H192.742V109.748H191.894V90.2519Z"
          fill="url(#paint104_linear_200_1496)"
        />{" "}
        <path
          d="M191.894 90.2519H192.742V109.748H191.894V90.2519Z"
          fill="url(#paint105_linear_200_1496)"
        />{" "}
        <path
          d="M193.166 92.7949H194.013V107.205H193.166V92.7949Z"
          fill="url(#paint106_linear_200_1496)"
        />{" "}
        <path
          d="M193.166 92.7949H194.013V107.205H193.166V92.7949Z"
          fill="url(#paint107_linear_200_1496)"
        />{" "}
        <path
          d="M194.437 94.914H195.285V105.086H194.437V94.914Z"
          fill="url(#paint108_linear_200_1496)"
        />{" "}
        <path
          d="M194.437 94.914H195.285V105.086H194.437V94.914Z"
          fill="url(#paint109_linear_200_1496)"
        />{" "}
        <path
          d="M195.709 97.457H196.556V102.543H195.709V97.457Z"
          fill="url(#paint110_linear_200_1496)"
        />{" "}
        <path
          d="M195.709 97.457H196.556V102.543H195.709V97.457Z"
          fill="url(#paint111_linear_200_1496)"
        />{" "}
        <path
          d="M196.98 98.3047H197.828V101.695H196.98V98.3047Z"
          fill="url(#paint112_linear_200_1496)"
        />{" "}
        <path
          d="M196.98 98.3047H197.828V101.695H196.98V98.3047Z"
          fill="url(#paint113_linear_200_1496)"
        />{" "}
        <path
          d="M197.828 96.1855H198.676V103.815H197.828V96.1855Z"
          fill="url(#paint114_linear_200_1496)"
        />{" "}
        <path
          d="M197.828 96.1855H198.676V103.815H197.828V96.1855Z"
          fill="url(#paint115_linear_200_1496)"
        />{" "}
        <path
          d="M199.099 94.4902H199.947V105.51H199.099V94.4902Z"
          fill="url(#paint116_linear_200_1496)"
        />{" "}
        <path
          d="M199.099 94.4902H199.947V105.51H199.099V94.4902Z"
          fill="url(#paint117_linear_200_1496)"
        />{" "}
        <path
          d="M200.371 92.3711H201.219V107.629H200.371V92.3711Z"
          fill="url(#paint118_linear_200_1496)"
        />{" "}
        <path
          d="M200.371 92.3711H201.219V107.629H200.371V92.3711Z"
          fill="url(#paint119_linear_200_1496)"
        />{" "}
        <path
          d="M201.642 93.6426H202.49V106.358H201.642V93.6426Z"
          fill="url(#paint120_linear_200_1496)"
        />{" "}
        <path
          d="M201.642 93.6426H202.49V106.358H201.642V93.6426Z"
          fill="url(#paint121_linear_200_1496)"
        />{" "}
        <path
          d="M202.49 96.6094H203.338V103.391H202.49V96.6094Z"
          fill="url(#paint122_linear_200_1496)"
        />{" "}
        <path
          d="M202.49 96.6094H203.338V103.391H202.49V96.6094Z"
          fill="url(#paint123_linear_200_1496)"
        />{" "}
        <path
          d="M203.762 97.0332H204.609V102.967H203.762V97.0332Z"
          fill="url(#paint124_linear_200_1496)"
        />{" "}
        <path
          d="M203.762 97.0332H204.609V102.967H203.762V97.0332Z"
          fill="url(#paint125_linear_200_1496)"
        />{" "}
        <path
          d="M205.033 97.8809H205.881V102.119H205.033V97.8809Z"
          fill="url(#paint126_linear_200_1496)"
        />{" "}
        <path
          d="M205.033 97.8809H205.881V102.119H205.033V97.8809Z"
          fill="url(#paint127_linear_200_1496)"
        />{" "}
        <path
          d="M205.881 98.7285H206.728V101.272H205.881V98.7285Z"
          fill="url(#paint128_linear_200_1496)"
        />{" "}
        <path
          d="M205.881 98.7285H206.728V101.272H205.881V98.7285Z"
          fill="url(#paint129_linear_200_1496)"
        />{" "}
        <path
          d="M207.152 99.1524H208V100.848H207.152V99.1524Z"
          fill="url(#paint130_linear_200_1496)"
        />{" "}
        <path
          d="M207.152 99.1524H208V100.848H207.152V99.1524Z"
          fill="url(#paint131_linear_200_1496)"
        />{" "}
        <path
          d="M127.048 99.5762H126.2V100.424H127.048V99.5762Z"
          fill="url(#paint132_linear_200_1496)"
        />{" "}
        <path
          d="M127.048 99.5762H126.2V100.424H127.048V99.5762Z"
          fill="url(#paint133_linear_200_1496)"
        />{" "}
        <path
          d="M125.776 99.5762H124.929V100.424H125.776V99.5762Z"
          fill="url(#paint134_linear_200_1496)"
        />{" "}
        <path
          d="M125.776 99.5762H124.929V100.424H125.776V99.5762Z"
          fill="url(#paint135_linear_200_1496)"
        />{" "}
        <path
          d="M124.505 99.5762H123.657V100.424H124.505V99.5762Z"
          fill="url(#paint136_linear_200_1496)"
        />{" "}
        <path
          d="M124.505 99.5762H123.657V100.424H124.505V99.5762Z"
          fill="url(#paint137_linear_200_1496)"
        />{" "}
        <path
          d="M123.233 99.5762H122.386V100.424H123.233V99.5762Z"
          fill="url(#paint138_linear_200_1496)"
        />{" "}
        <path
          d="M123.233 99.5762H122.386V100.424H123.233V99.5762Z"
          fill="url(#paint139_linear_200_1496)"
        />{" "}
        <path
          d="M121.962 99.1524H121.114V100.848H121.962V99.1524Z"
          fill="url(#paint140_linear_200_1496)"
        />{" "}
        <path
          d="M121.962 99.1524H121.114V100.848H121.962V99.1524Z"
          fill="url(#paint141_linear_200_1496)"
        />{" "}
        <path
          d="M120.69 98.7285H119.843V101.272H120.69V98.7285Z"
          fill="url(#paint142_linear_200_1496)"
        />{" "}
        <path
          d="M120.69 98.7285H119.843V101.272H120.69V98.7285Z"
          fill="url(#paint143_linear_200_1496)"
        />{" "}
        <path
          d="M119.419 97.8809H118.571V102.119H119.419V97.8809Z"
          fill="url(#paint144_linear_200_1496)"
        />{" "}
        <path
          d="M119.419 97.8809H118.571V102.119H119.419V97.8809Z"
          fill="url(#paint145_linear_200_1496)"
        />{" "}
        <path
          d="M32.533 93.6426H33.3807V106.358H32.533V93.6426Z"
          fill="url(#paint146_linear_200_1496)"
        />{" "}
        <path
          d="M32.533 93.6426H33.3807V106.358H32.533V93.6426Z"
          fill="url(#paint147_linear_200_1496)"
        />{" "}
        <path
          d="M31.2615 92.3711H32.1092V107.629H31.2615V92.3711Z"
          fill="url(#paint148_linear_200_1496)"
        />{" "}
        <path
          d="M31.2615 92.3711H32.1092V107.629H31.2615V92.3711Z"
          fill="url(#paint149_linear_200_1496)"
        />{" "}
        <path
          d="M29.99 94.4902H30.8377V105.51H29.99V94.4902Z"
          fill="url(#paint150_linear_200_1496)"
        />{" "}
        <path
          d="M29.99 94.4902H30.8377V105.51H29.99V94.4902Z"
          fill="url(#paint151_linear_200_1496)"
        />{" "}
        <path
          d="M28.7185 96.1855H29.5662V103.815H28.7185V96.1855Z"
          fill="url(#paint152_linear_200_1496)"
        />{" "}
        <path
          d="M28.7185 96.1855H29.5662V103.815H28.7185V96.1855Z"
          fill="url(#paint153_linear_200_1496)"
        />{" "}
        <path
          d="M27.447 98.7285H28.2947V101.272H27.447V98.7285Z"
          fill="url(#paint154_linear_200_1496)"
        />{" "}
        <path
          d="M27.447 98.7285H28.2947V101.272H27.447V98.7285Z"
          fill="url(#paint155_linear_200_1496)"
        />{" "}
        <path
          d="M26.1755 97.8809H27.0232V102.119H26.1755V97.8809Z"
          fill="url(#paint156_linear_200_1496)"
        />{" "}
        <path
          d="M26.1755 97.8809H27.0232V102.119H26.1755V97.8809Z"
          fill="url(#paint157_linear_200_1496)"
        />{" "}
        <path
          d="M24.904 94.914H25.7517V105.086H24.904V94.914Z"
          fill="url(#paint158_linear_200_1496)"
        />{" "}
        <path
          d="M24.904 94.914H25.7517V105.086H24.904V94.914Z"
          fill="url(#paint159_linear_200_1496)"
        />{" "}
        <path
          d="M23.6325 90.2519H24.4802V109.748H23.6325V90.2519Z"
          fill="url(#paint160_linear_200_1496)"
        />{" "}
        <path
          d="M23.6325 90.2519H24.4802V109.748H23.6325V90.2519Z"
          fill="url(#paint161_linear_200_1496)"
        />{" "}
        <path
          d="M22.361 92.7949H23.2087V107.205H22.361V92.7949Z"
          fill="url(#paint162_linear_200_1496)"
        />{" "}
        <path
          d="M22.361 92.7949H23.2087V107.205H22.361V92.7949Z"
          fill="url(#paint163_linear_200_1496)"
        />{" "}
        <path
          d="M21.0895 90.2519H21.9372V109.748H21.0895V90.2519Z"
          fill="url(#paint164_linear_200_1496)"
        />{" "}
        <path
          d="M21.0895 90.2519H21.9372V109.748H21.0895V90.2519Z"
          fill="url(#paint165_linear_200_1496)"
        />{" "}
        <path
          d="M19.8181 94.0664H20.6657V105.934H19.8181V94.0664Z"
          fill="url(#paint166_linear_200_1496)"
        />{" "}
        <path
          d="M19.8181 94.0664H20.6657V105.934H19.8181V94.0664Z"
          fill="url(#paint167_linear_200_1496)"
        />{" "}
        <path
          d="M18.5466 98.3047H19.3942V101.695H18.5466V98.3047Z"
          fill="url(#paint168_linear_200_1496)"
        />{" "}
        <path
          d="M18.5466 98.3047H19.3942V101.695H18.5466V98.3047Z"
          fill="url(#paint169_linear_200_1496)"
        />{" "}
        <path
          d="M17.2751 99.5762H18.1227V100.424H17.2751V99.5762Z"
          fill="url(#paint170_linear_200_1496)"
        />{" "}
        <path
          d="M17.2751 99.5762H18.1227V100.424H17.2751V99.5762Z"
          fill="url(#paint171_linear_200_1496)"
        />{" "}
        <path
          d="M16.0036 99.1524H16.8512V100.848H16.0036V99.1524Z"
          fill="url(#paint172_linear_200_1496)"
        />{" "}
        <path
          d="M16.0036 99.1524H16.8512V100.848H16.0036V99.1524Z"
          fill="url(#paint173_linear_200_1496)"
        />{" "}
        <path
          d="M14.7321 97.0332H15.5797V102.967H14.7321V97.0332Z"
          fill="url(#paint174_linear_200_1496)"
        />{" "}
        <path
          d="M14.7321 97.0332H15.5797V102.967H14.7321V97.0332Z"
          fill="url(#paint175_linear_200_1496)"
        />{" "}
        <path
          d="M13.4606 96.1855H14.3082V103.815H13.4606V96.1855Z"
          fill="url(#paint176_linear_200_1496)"
        />{" "}
        <path
          d="M13.4606 96.1855H14.3082V103.815H13.4606V96.1855Z"
          fill="url(#paint177_linear_200_1496)"
        />{" "}
        <path
          d="M12.1891 94.0664H13.0367V105.934H12.1891V94.0664Z"
          fill="url(#paint178_linear_200_1496)"
        />{" "}
        <path
          d="M12.1891 94.0664H13.0367V105.934H12.1891V94.0664Z"
          fill="url(#paint179_linear_200_1496)"
        />{" "}
        <path
          d="M10.9176 90.2519H11.7652V109.748H10.9176V90.2519Z"
          fill="url(#paint180_linear_200_1496)"
        />{" "}
        <path
          d="M10.9176 90.2519H11.7652V109.748H10.9176V90.2519Z"
          fill="url(#paint181_linear_200_1496)"
        />{" "}
        <path
          d="M9.64608 93.6426H10.4937V106.358H9.64608V93.6426Z"
          fill="url(#paint182_linear_200_1496)"
        />{" "}
        <path
          d="M9.64608 93.6426H10.4937V106.358H9.64608V93.6426Z"
          fill="url(#paint183_linear_200_1496)"
        />{" "}
        <path
          d="M8.37458 94.4902H9.22225V105.51H8.37458V94.4902Z"
          fill="url(#paint184_linear_200_1496)"
        />{" "}
        <path
          d="M8.37458 94.4902H9.22225V105.51H8.37458V94.4902Z"
          fill="url(#paint185_linear_200_1496)"
        />{" "}
        <path
          d="M7.10309 95.3379H7.95075V104.662H7.10309V95.3379Z"
          fill="url(#paint186_linear_200_1496)"
        />{" "}
        <path
          d="M7.10309 95.3379H7.95075V104.662H7.10309V95.3379Z"
          fill="url(#paint187_linear_200_1496)"
        />{" "}
        <path
          d="M5.83159 94.4902H6.67926V105.51H5.83159V94.4902Z"
          fill="url(#paint188_linear_200_1496)"
        />{" "}
        <path
          d="M5.83159 94.4902H6.67926V105.51H5.83159V94.4902Z"
          fill="url(#paint189_linear_200_1496)"
        />{" "}
        <path
          d="M4.56009 93.2187H5.40776V106.781H4.56009V93.2187Z"
          fill="url(#paint190_linear_200_1496)"
        />{" "}
        <path
          d="M4.56009 93.2187H5.40776V106.781H4.56009V93.2187Z"
          fill="url(#paint191_linear_200_1496)"
        />{" "}
        <path
          d="M3.2886 96.1855H4.13626V103.815H3.2886V96.1855Z"
          fill="url(#paint192_linear_200_1496)"
        />{" "}
        <path
          d="M3.2886 96.1855H4.13626V103.815H3.2886V96.1855Z"
          fill="url(#paint193_linear_200_1496)"
        />{" "}
        <path
          d="M2.0171 98.3047H2.86477V101.695H2.0171V98.3047Z"
          fill="url(#paint194_linear_200_1496)"
        />{" "}
        <path
          d="M2.0171 98.3047H2.86477V101.695H2.0171V98.3047Z"
          fill="url(#paint195_linear_200_1496)"
        />{" "}
        <path
          d="M0.745605 99.1524H1.59327V100.848H0.745605V99.1524Z"
          fill="url(#paint196_linear_200_1496)"
        />{" "}
        <path
          d="M0.745605 99.1524H1.59327V100.848H0.745605V99.1524Z"
          fill="url(#paint197_linear_200_1496)"
        />{" "}
        <path
          d="M33.8045 96.6094H34.6522V103.391H33.8045V96.6094Z"
          fill="url(#paint198_linear_200_1496)"
        />{" "}
        <path
          d="M33.8045 96.6094H34.6522V103.391H33.8045V96.6094Z"
          fill="url(#paint199_linear_200_1496)"
        />{" "}
        <path
          d="M35.076 97.457H35.9237V102.543H35.076V97.457Z"
          fill="url(#paint200_linear_200_1496)"
        />{" "}
        <path
          d="M35.076 97.457H35.9237V102.543H35.076V97.457Z"
          fill="url(#paint201_linear_200_1496)"
        />{" "}
        <path
          d="M36.3475 97.8809H37.1952V102.119H36.3475V97.8809Z"
          fill="url(#paint202_linear_200_1496)"
        />{" "}
        <path
          d="M36.3475 97.8809H37.1952V102.119H36.3475V97.8809Z"
          fill="url(#paint203_linear_200_1496)"
        />{" "}
        <path
          d="M37.619 98.7285H38.4667V101.272H37.619V98.7285Z"
          fill="url(#paint204_linear_200_1496)"
        />{" "}
        <path
          d="M37.619 98.7285H38.4667V101.272H37.619V98.7285Z"
          fill="url(#paint205_linear_200_1496)"
        />{" "}
        <path
          d="M38.8905 99.5762H39.7382V100.424H38.8905V99.5762Z"
          fill="url(#paint206_linear_200_1496)"
        />{" "}
        <path
          d="M38.8905 99.5762H39.7382V100.424H38.8905V99.5762Z"
          fill="url(#paint207_linear_200_1496)"
        />{" "}
        <path
          d="M40.162 99.5762H41.0097V100.424H40.162V99.5762Z"
          fill="url(#paint208_linear_200_1496)"
        />{" "}
        <path
          d="M40.162 99.5762H41.0097V100.424H40.162V99.5762Z"
          fill="url(#paint209_linear_200_1496)"
        />{" "}
        <path
          d="M41.4335 99.5762H42.2812V100.424H41.4335V99.5762Z"
          fill="url(#paint210_linear_200_1496)"
        />{" "}
        <path
          d="M41.4335 99.5762H42.2812V100.424H41.4335V99.5762Z"
          fill="url(#paint211_linear_200_1496)"
        />{" "}
        <path
          d="M42.705 99.1524H43.5527V100.848H42.705V99.1524Z"
          fill="url(#paint212_linear_200_1496)"
        />{" "}
        <path
          d="M42.705 99.1524H43.5527V100.848H42.705V99.1524Z"
          fill="url(#paint213_linear_200_1496)"
        />{" "}
        <path
          d="M43.9765 98.7285H44.8242V101.272H43.9765V98.7285Z"
          fill="url(#paint214_linear_200_1496)"
        />{" "}
        <path
          d="M43.9765 98.7285H44.8242V101.272H43.9765V98.7285Z"
          fill="url(#paint215_linear_200_1496)"
        />{" "}
        <path
          d="M45.248 97.8809H46.0956V102.119H45.248V97.8809Z"
          fill="url(#paint216_linear_200_1496)"
        />{" "}
        <path
          d="M45.248 97.8809H46.0956V102.119H45.248V97.8809Z"
          fill="url(#paint217_linear_200_1496)"
        />{" "}
        <path
          d="M46.5195 95.3379H47.3671V104.662H46.5195V95.3379Z"
          fill="url(#paint218_linear_200_1496)"
        />{" "}
        <path
          d="M46.5195 95.3379H47.3671V104.662H46.5195V95.3379Z"
          fill="url(#paint219_linear_200_1496)"
        />{" "}
        <path
          d="M47.791 93.2187H48.6386V106.781H47.791V93.2187Z"
          fill="url(#paint220_linear_200_1496)"
        />{" "}
        <path
          d="M47.791 93.2187H48.6386V106.781H47.791V93.2187Z"
          fill="url(#paint221_linear_200_1496)"
        />{" "}
        <path
          d="M49.0625 94.0664H49.9101V105.934H49.0625V94.0664Z"
          fill="url(#paint222_linear_200_1496)"
        />{" "}
        <path
          d="M49.0625 94.0664H49.9101V105.934H49.0625V94.0664Z"
          fill="url(#paint223_linear_200_1496)"
        />{" "}
        <path
          d="M50.334 94.914H51.1816V105.086H50.334V94.914Z"
          fill="url(#paint224_linear_200_1496)"
        />{" "}
        <path
          d="M50.334 94.914H51.1816V105.086H50.334V94.914Z"
          fill="url(#paint225_linear_200_1496)"
        />{" "}
        <path
          d="M51.6055 94.0664H52.4531V105.934H51.6055V94.0664Z"
          fill="url(#paint226_linear_200_1496)"
        />{" "}
        <path
          d="M51.6055 94.0664H52.4531V105.934H51.6055V94.0664Z"
          fill="url(#paint227_linear_200_1496)"
        />{" "}
        <path
          d="M52.877 93.6426H53.7246V106.358H52.877V93.6426Z"
          fill="url(#paint228_linear_200_1496)"
        />{" "}
        <path
          d="M52.877 93.6426H53.7246V106.358H52.877V93.6426Z"
          fill="url(#paint229_linear_200_1496)"
        />{" "}
        <path
          d="M54.1485 91.9472H54.9961V108.053H54.1485V91.9472Z"
          fill="url(#paint230_linear_200_1496)"
        />{" "}
        <path
          d="M54.1485 91.9472H54.9961V108.053H54.1485V91.9472Z"
          fill="url(#paint231_linear_200_1496)"
        />{" "}
        <path
          d="M55.42 89.8281H56.2676V110.172H55.42V89.8281Z"
          fill="url(#paint232_linear_200_1496)"
        />{" "}
        <path
          d="M55.42 89.8281H56.2676V110.172H55.42V89.8281Z"
          fill="url(#paint233_linear_200_1496)"
        />{" "}
        <path
          d="M56.6914 93.6426H57.5391V106.358H56.6914V93.6426Z"
          fill="url(#paint234_linear_200_1496)"
        />{" "}
        <path
          d="M56.6914 93.6426H57.5391V106.358H56.6914V93.6426Z"
          fill="url(#paint235_linear_200_1496)"
        />{" "}
        <path
          d="M57.9629 96.1855H58.8106V103.815H57.9629V96.1855Z"
          fill="url(#paint236_linear_200_1496)"
        />{" "}
        <path
          d="M57.9629 96.1855H58.8106V103.815H57.9629V96.1855Z"
          fill="url(#paint237_linear_200_1496)"
        />{" "}
        <path
          d="M59.2344 97.0332H60.0821V102.967H59.2344V97.0332Z"
          fill="url(#paint238_linear_200_1496)"
        />{" "}
        <path
          d="M59.2344 97.0332H60.0821V102.967H59.2344V97.0332Z"
          fill="url(#paint239_linear_200_1496)"
        />{" "}
        <path
          d="M60.5059 99.1524H61.3536V100.848H60.5059V99.1524Z"
          fill="url(#paint240_linear_200_1496)"
        />{" "}
        <path
          d="M60.5059 99.1524H61.3536V100.848H60.5059V99.1524Z"
          fill="url(#paint241_linear_200_1496)"
        />{" "}
        <path
          d="M61.7774 98.3047H62.6251V101.695H61.7774V98.3047Z"
          fill="url(#paint242_linear_200_1496)"
        />{" "}
        <path
          d="M61.7774 98.3047H62.6251V101.695H61.7774V98.3047Z"
          fill="url(#paint243_linear_200_1496)"
        />{" "}
        <path
          d="M63.0489 94.0664H63.8966V105.934H63.0489V94.0664Z"
          fill="url(#paint244_linear_200_1496)"
        />{" "}
        <path
          d="M63.0489 94.0664H63.8966V105.934H63.0489V94.0664Z"
          fill="url(#paint245_linear_200_1496)"
        />{" "}
        <path
          d="M64.3204 90.2519H65.1681V109.748H64.3204V90.2519Z"
          fill="url(#paint246_linear_200_1496)"
        />{" "}
        <path
          d="M64.3204 90.2519H65.1681V109.748H64.3204V90.2519Z"
          fill="url(#paint247_linear_200_1496)"
        />{" "}
        <path
          d="M65.5919 92.7949H66.4396V107.205H65.5919V92.7949Z"
          fill="url(#paint248_linear_200_1496)"
        />{" "}
        <path
          d="M65.5919 92.7949H66.4396V107.205H65.5919V92.7949Z"
          fill="url(#paint249_linear_200_1496)"
        />{" "}
        <path
          d="M66.4396 90.2519H67.2873V109.748H66.4396V90.2519Z"
          fill="url(#paint250_linear_200_1496)"
        />{" "}
        <path
          d="M66.4396 90.2519H67.2873V109.748H66.4396V90.2519Z"
          fill="url(#paint251_linear_200_1496)"
        />{" "}
        <path
          d="M67.7111 92.7949H68.5587V107.205H67.7111V92.7949Z"
          fill="url(#paint252_linear_200_1496)"
        />{" "}
        <path
          d="M67.7111 92.7949H68.5587V107.205H67.7111V92.7949Z"
          fill="url(#paint253_linear_200_1496)"
        />{" "}
        <path
          d="M68.9826 94.914H69.8302V105.086H68.9826V94.914Z"
          fill="url(#paint254_linear_200_1496)"
        />{" "}
        <path
          d="M68.9826 94.914H69.8302V105.086H68.9826V94.914Z"
          fill="url(#paint255_linear_200_1496)"
        />{" "}
        <path
          d="M70.2541 97.457H71.1017V102.543H70.2541V97.457Z"
          fill="url(#paint256_linear_200_1496)"
        />{" "}
        <path
          d="M70.2541 97.457H71.1017V102.543H70.2541V97.457Z"
          fill="url(#paint257_linear_200_1496)"
        />{" "}
        <path
          d="M71.5256 98.3047H72.3732V101.695H71.5256V98.3047Z"
          fill="url(#paint258_linear_200_1496)"
        />{" "}
        <path
          d="M71.5256 98.3047H72.3732V101.695H71.5256V98.3047Z"
          fill="url(#paint259_linear_200_1496)"
        />{" "}
        <path
          d="M72.3732 96.1855H73.2209V103.815H72.3732V96.1855Z"
          fill="url(#paint260_linear_200_1496)"
        />{" "}
        <path
          d="M72.3732 96.1855H73.2209V103.815H72.3732V96.1855Z"
          fill="url(#paint261_linear_200_1496)"
        />{" "}
        <path
          d="M73.6447 94.4902H74.4924V105.51H73.6447V94.4902Z"
          fill="url(#paint262_linear_200_1496)"
        />{" "}
        <path
          d="M73.6447 94.4902H74.4924V105.51H73.6447V94.4902Z"
          fill="url(#paint263_linear_200_1496)"
        />{" "}
        <path
          d="M74.9162 92.3711H75.7639V107.629H74.9162V92.3711Z"
          fill="url(#paint264_linear_200_1496)"
        />{" "}
        <path
          d="M74.9162 92.3711H75.7639V107.629H74.9162V92.3711Z"
          fill="url(#paint265_linear_200_1496)"
        />{" "}
        <path
          d="M76.1877 93.6426H77.0354V106.358H76.1877V93.6426Z"
          fill="url(#paint266_linear_200_1496)"
        />{" "}
        <path
          d="M76.1877 93.6426H77.0354V106.358H76.1877V93.6426Z"
          fill="url(#paint267_linear_200_1496)"
        />{" "}
        <path
          d="M77.0354 96.6094H77.8831V103.391H77.0354V96.6094Z"
          fill="url(#paint268_linear_200_1496)"
        />{" "}
        <path
          d="M77.0354 96.6094H77.8831V103.391H77.0354V96.6094Z"
          fill="url(#paint269_linear_200_1496)"
        />{" "}
        <path
          d="M78.3069 97.0332H79.1546V102.967H78.3069V97.0332Z"
          fill="url(#paint270_linear_200_1496)"
        />{" "}
        <path
          d="M78.3069 97.0332H79.1546V102.967H78.3069V97.0332Z"
          fill="url(#paint271_linear_200_1496)"
        />{" "}
        <path
          d="M79.5784 97.8809H80.426V102.119H79.5784V97.8809Z"
          fill="url(#paint272_linear_200_1496)"
        />{" "}
        <path
          d="M79.5784 97.8809H80.426V102.119H79.5784V97.8809Z"
          fill="url(#paint273_linear_200_1496)"
        />{" "}
        <path
          d="M80.426 98.7285H81.2737V101.272H80.426V98.7285Z"
          fill="url(#paint274_linear_200_1496)"
        />{" "}
        <path
          d="M80.426 98.7285H81.2737V101.272H80.426V98.7285Z"
          fill="url(#paint275_linear_200_1496)"
        />{" "}
        <path
          d="M81.6975 99.1524H82.5452V100.848H81.6975V99.1524Z"
          fill="url(#paint276_linear_200_1496)"
        />{" "}
        <path
          d="M81.6975 99.1524H82.5452V100.848H81.6975V99.1524Z"
          fill="url(#paint277_linear_200_1496)"
        />{" "}
        <path
          d="M82.969 99.5762H83.8167V100.424H82.969V99.5762Z"
          fill="url(#paint278_linear_200_1496)"
        />{" "}
        <path
          d="M82.969 99.5762H83.8167V100.424H82.969V99.5762Z"
          fill="url(#paint279_linear_200_1496)"
        />{" "}
        <path
          d="M84.2405 99.5762H85.0882V100.424H84.2405V99.5762Z"
          fill="url(#paint280_linear_200_1496)"
        />{" "}
        <path
          d="M84.2405 99.5762H85.0882V100.424H84.2405V99.5762Z"
          fill="url(#paint281_linear_200_1496)"
        />{" "}
        <path
          d="M85.512 99.5762H86.3597V100H85.512V99.5762Z"
          fill="url(#paint282_linear_200_1496)"
        />{" "}
        <path
          d="M85.512 99.5762H86.3597V100H85.512V99.5762Z"
          fill="url(#paint283_linear_200_1496)"
        />{" "}
        <path
          d="M86.7835 99.5762H87.6312V100.424H86.7835V99.5762Z"
          fill="url(#paint284_linear_200_1496)"
        />{" "}
        <path
          d="M86.7835 99.5762H87.6312V100.424H86.7835V99.5762Z"
          fill="url(#paint285_linear_200_1496)"
        />{" "}
        <path
          d="M88.055 99.1524H88.9027V100.848H88.055V99.1524Z"
          fill="url(#paint286_linear_200_1496)"
        />{" "}
        <path
          d="M88.055 99.1524H88.9027V100.848H88.055V99.1524Z"
          fill="url(#paint287_linear_200_1496)"
        />{" "}
        <path
          d="M89.3265 98.7285H90.1742V101.272H89.3265V98.7285Z"
          fill="url(#paint288_linear_200_1496)"
        />{" "}
        <path
          d="M89.3265 98.7285H90.1742V101.272H89.3265V98.7285Z"
          fill="url(#paint289_linear_200_1496)"
        />{" "}
        <path
          d="M90.598 97.8809H91.4457V102.119H90.598V97.8809Z"
          fill="url(#paint290_linear_200_1496)"
        />{" "}
        <path
          d="M90.598 97.8809H91.4457V102.119H90.598V97.8809Z"
          fill="url(#paint291_linear_200_1496)"
        />{" "}
      </g>{" "}
      <g className="red-g" id="main-red-g" ref={svgGRef}>
        {" "}
        <path d="M157.988 93.6426H158.835V106.358H157.988V93.6426Z" />{" "}
        <path d="M157.988 93.6426H158.835V106.358H157.988V93.6426Z" />{" "}
        <path d="M156.716 92.3711H157.564V107.629H156.716V92.3711Z" />{" "}
        <path d="M156.716 92.3711H157.564V107.629H156.716V92.3711Z" />{" "}
        <path d="M155.445 94.4902H156.292V105.51H155.445V94.4902Z" />{" "}
        <path d="M155.445 94.4902H156.292V105.51H155.445V94.4902Z" />{" "}
        <path d="M154.173 96.1855H155.021V103.815H154.173V96.1855Z" />{" "}
        <path d="M154.173 96.1855H155.021V103.815H154.173V96.1855Z" />{" "}
        <path d="M152.902 98.7285H153.749V101.272H152.902V98.7285Z" />{" "}
        <path d="M152.902 98.7285H153.749V101.272H152.902V98.7285Z" />{" "}
        <path d="M151.63 97.8809H152.478V102.119H151.63V97.8809Z" />{" "}
        <path d="M151.63 97.8809H152.478V102.119H151.63V97.8809Z" />{" "}
        <path d="M150.359 94.914H151.206V105.086H150.359V94.914Z" />{" "}
        <path d="M150.359 94.914H151.206V105.086H150.359V94.914Z" />{" "}
        <path d="M149.087 90.2519H149.935V109.748H149.087V90.2519Z" />{" "}
        <path d="M149.087 90.2519H149.935V109.748H149.087V90.2519Z" />{" "}
        <path d="M147.816 92.7949H148.663V107.205H147.816V92.7949Z" />{" "}
        <path d="M147.816 92.7949H148.663V107.205H147.816V92.7949Z" />{" "}
        <path d="M146.544 90.2519H147.392V109.748H146.544V90.2519Z" />{" "}
        <path d="M146.544 90.2519H147.392V109.748H146.544V90.2519Z" />{" "}
        <path d="M145.273 94.0664H146.12V105.934H145.273V94.0664Z" />{" "}
        <path d="M145.273 94.0664H146.12V105.934H145.273V94.0664Z" />{" "}
        <path d="M144.001 98.3047H144.849V101.695H144.001V98.3047Z" />{" "}
        <path d="M144.001 98.3047H144.849V101.695H144.001V98.3047Z" />{" "}
        <path d="M142.73 99.5762H143.577V100.424H142.73V99.5762Z" />{" "}
        <path d="M142.73 99.5762H143.577V100.424H142.73V99.5762Z" />{" "}
        <path d="M141.458 99.1524H142.306V100.848H141.458V99.1524Z" />{" "}
        <path d="M141.458 99.1524H142.306V100.848H141.458V99.1524Z" />{" "}
        <path d="M140.187 97.0332H141.034V102.967H140.187V97.0332Z" />{" "}
        <path d="M140.187 97.0332H141.034V102.967H140.187V97.0332Z" />{" "}
        <path d="M138.915 96.1855H139.763V103.815H138.915V96.1855Z" />{" "}
        <path d="M138.915 96.1855H139.763V103.815H138.915V96.1855Z" />{" "}
        <path d="M137.644 94.0664H138.491V105.934H137.644V94.0664Z" />{" "}
        <path d="M137.644 94.0664H138.491V105.934H137.644V94.0664Z" />{" "}
        <path d="M136.372 90.2519H137.22V109.748H136.372V90.2519Z" />{" "}
        <path d="M136.372 90.2519H137.22V109.748H136.372V90.2519Z" />{" "}
        <path d="M135.101 93.6426H135.948V106.358H135.101V93.6426Z" />{" "}
        <path d="M135.101 93.6426H135.948V106.358H135.101V93.6426Z" />{" "}
        <path d="M133.829 94.4902H134.677V105.51H133.829V94.4902Z" />{" "}
        <path d="M133.829 94.4902H134.677V105.51H133.829V94.4902Z" />{" "}
        <path d="M132.558 95.3379H133.405V104.662H132.558V95.3379Z" />{" "}
        <path d="M132.558 95.3379H133.405V104.662H132.558V95.3379Z" />{" "}
        <path d="M131.286 94.4902H132.134V105.51H131.286V94.4902Z" />{" "}
        <path d="M131.286 94.4902H132.134V105.51H131.286V94.4902Z" />{" "}
        <path d="M130.015 93.2187H130.862V106.781H130.015V93.2187Z" />{" "}
        <path d="M130.015 93.2187H130.862V106.781H130.015V93.2187Z" />{" "}
        <path d="M128.743 96.1855H129.591V103.815H128.743V96.1855Z" />{" "}
        <path d="M128.743 96.1855H129.591V103.815H128.743V96.1855Z" />{" "}
        <path d="M127.472 98.3047H128.319V101.695H127.472V98.3047Z" />{" "}
        <path d="M127.472 98.3047H128.319V101.695H127.472V98.3047Z" />{" "}
        <path d="M126.2 99.1524H127.048V100.848H126.2V99.1524Z" />{" "}
        <path d="M126.2 99.1524H127.048V100.848H126.2V99.1524Z" />{" "}
        <path d="M159.259 96.6094H160.107V103.391H159.259V96.6094Z" />{" "}
        <path d="M159.259 96.6094H160.107V103.391H159.259V96.6094Z" />{" "}
        <path d="M160.531 97.457H161.378V102.543H160.531V97.457Z" />{" "}
        <path d="M160.531 97.457H161.378V102.543H160.531V97.457Z" />{" "}
        <path d="M161.802 97.8809H162.65V102.119H161.802V97.8809Z" />{" "}
        <path d="M161.802 97.8809H162.65V102.119H161.802V97.8809Z" />{" "}
        <path d="M163.074 98.7285H163.921V101.272H163.074V98.7285Z" />{" "}
        <path d="M163.074 98.7285H163.921V101.272H163.074V98.7285Z" />{" "}
        <path d="M164.345 99.5762H165.193V100.424H164.345V99.5762Z" />{" "}
        <path d="M164.345 99.5762H165.193V100.424H164.345V99.5762Z" />{" "}
        <path d="M165.617 99.5762H166.464V100.424H165.617V99.5762Z" />{" "}
        <path d="M165.617 99.5762H166.464V100.424H165.617V99.5762Z" />{" "}
        <path d="M166.888 99.5762H167.736V100.424H166.888V99.5762Z" />{" "}
        <path d="M166.888 99.5762H167.736V100.424H166.888V99.5762Z" />{" "}
        <path d="M168.16 99.1524H169.007V100.848H168.16V99.1524Z" />{" "}
        <path d="M168.16 99.1524H169.007V100.848H168.16V99.1524Z" />{" "}
        <path d="M169.431 98.7285H170.279V101.272H169.431V98.7285Z" />{" "}
        <path d="M169.431 98.7285H170.279V101.272H169.431V98.7285Z" />{" "}
        <path d="M170.703 97.8809H171.55V102.119H170.703V97.8809Z" />{" "}
        <path d="M170.703 97.8809H171.55V102.119H170.703V97.8809Z" />{" "}
        <path d="M171.974 95.3379H172.822V104.662H171.974V95.3379Z" />{" "}
        <path d="M171.974 95.3379H172.822V104.662H171.974V95.3379Z" />{" "}
        <path d="M173.246 93.2187H174.093V106.781H173.246V93.2187Z" />{" "}
        <path d="M173.246 93.2187H174.093V106.781H173.246V93.2187Z" />{" "}
        <path d="M174.517 94.0664H175.365V105.934H174.517V94.0664Z" />{" "}
        <path d="M174.517 94.0664H175.365V105.934H174.517V94.0664Z" />{" "}
        <path d="M175.789 94.914H176.636V105.086H175.789V94.914Z" />{" "}
        <path d="M175.789 94.914H176.636V105.086H175.789V94.914Z" />{" "}
        <path d="M177.06 94.0664H177.908V105.934H177.06V94.0664Z" />{" "}
        <path d="M177.06 94.0664H177.908V105.934H177.06V94.0664Z" />{" "}
        <path d="M178.332 93.6426H179.179V106.358H178.332V93.6426Z" />{" "}
        <path d="M178.332 93.6426H179.179V106.358H178.332V93.6426Z" />{" "}
        <path d="M179.603 91.9472H180.451V108.053H179.603V91.9472Z" />{" "}
        <path d="M179.603 91.9472H180.451V108.053H179.603V91.9472Z" />{" "}
        <path d="M180.875 89.8281H181.722V110.172H180.875V89.8281Z" />{" "}
        <path d="M180.875 89.8281H181.722V110.172H180.875V89.8281Z" />{" "}
        <path d="M182.146 93.6426H182.994V106.358H182.146V93.6426Z" />{" "}
        <path d="M182.146 93.6426H182.994V106.358H182.146V93.6426Z" />{" "}
        <path d="M183.418 96.1855H184.265V103.815H183.418V96.1855Z" />{" "}
        <path d="M183.418 96.1855H184.265V103.815H183.418V96.1855Z" />{" "}
        <path d="M184.689 97.0332H185.537V102.967H184.689V97.0332Z" />{" "}
        <path d="M184.689 97.0332H185.537V102.967H184.689V97.0332Z" />{" "}
        <path d="M185.961 99.1524H186.808V100.848H185.961V99.1524Z" />{" "}
        <path d="M185.961 99.1524H186.808V100.848H185.961V99.1524Z" />{" "}
        <path d="M187.232 98.3047H188.08V101.695H187.232V98.3047Z" />{" "}
        <path d="M187.232 98.3047H188.08V101.695H187.232V98.3047Z" />{" "}
        <path d="M188.504 94.0664H189.351V105.934H188.504V94.0664Z" />{" "}
        <path d="M188.504 94.0664H189.351V105.934H188.504V94.0664Z" />{" "}
        <path d="M189.775 90.2519H190.623V109.748H189.775V90.2519Z" />{" "}
        <path d="M189.775 90.2519H190.623V109.748H189.775V90.2519Z" />{" "}
        <path d="M191.047 92.7949H191.894V107.205H191.047V92.7949Z" />{" "}
        <path d="M191.047 92.7949H191.894V107.205H191.047V92.7949Z" />{" "}
        <path d="M191.894 90.2519H192.742V109.748H191.894V90.2519Z" />{" "}
        <path d="M191.894 90.2519H192.742V109.748H191.894V90.2519Z" />{" "}
        <path d="M193.166 92.7949H194.013V107.205H193.166V92.7949Z" />{" "}
        <path d="M193.166 92.7949H194.013V107.205H193.166V92.7949Z" />{" "}
        <path d="M194.437 94.914H195.285V105.086H194.437V94.914Z" />{" "}
        <path d="M194.437 94.914H195.285V105.086H194.437V94.914Z" />{" "}
        <path d="M195.709 97.457H196.556V102.543H195.709V97.457Z" />{" "}
        <path d="M195.709 97.457H196.556V102.543H195.709V97.457Z" />{" "}
        <path d="M196.98 98.3047H197.828V101.695H196.98V98.3047Z" />{" "}
        <path d="M196.98 98.3047H197.828V101.695H196.98V98.3047Z" />{" "}
        <path d="M197.828 96.1855H198.676V103.815H197.828V96.1855Z" />{" "}
        <path d="M197.828 96.1855H198.676V103.815H197.828V96.1855Z" />{" "}
        <path d="M199.099 94.4902H199.947V105.51H199.099V94.4902Z" />{" "}
        <path d="M199.099 94.4902H199.947V105.51H199.099V94.4902Z" />{" "}
        <path d="M200.371 92.3711H201.219V107.629H200.371V92.3711Z" />{" "}
        <path d="M200.371 92.3711H201.219V107.629H200.371V92.3711Z" />{" "}
        <path d="M201.642 93.6426H202.49V106.358H201.642V93.6426Z" />{" "}
        <path d="M201.642 93.6426H202.49V106.358H201.642V93.6426Z" />{" "}
        <path d="M202.49 96.6094H203.338V103.391H202.49V96.6094Z" />{" "}
        <path d="M202.49 96.6094H203.338V103.391H202.49V96.6094Z" />{" "}
        <path d="M203.762 97.0332H204.609V102.967H203.762V97.0332Z" />{" "}
        <path d="M203.762 97.0332H204.609V102.967H203.762V97.0332Z" />{" "}
        <path d="M205.033 97.8809H205.881V102.119H205.033V97.8809Z" />{" "}
        <path d="M205.033 97.8809H205.881V102.119H205.033V97.8809Z" />{" "}
        <path d="M205.881 98.7285H206.728V101.272H205.881V98.7285Z" />{" "}
        <path d="M205.881 98.7285H206.728V101.272H205.881V98.7285Z" />{" "}
        <path d="M207.152 99.1524H208V100.848H207.152V99.1524Z" />{" "}
        <path d="M207.152 99.1524H208V100.848H207.152V99.1524Z" />{" "}
        <path d="M127.048 99.5762H126.2V100.424H127.048V99.5762Z" />{" "}
        <path d="M127.048 99.5762H126.2V100.424H127.048V99.5762Z" />{" "}
        <path d="M125.776 99.5762H124.929V100.424H125.776V99.5762Z" />{" "}
        <path d="M125.776 99.5762H124.929V100.424H125.776V99.5762Z" />{" "}
        <path d="M124.505 99.5762H123.657V100.424H124.505V99.5762Z" />{" "}
        <path d="M124.505 99.5762H123.657V100.424H124.505V99.5762Z" />{" "}
        <path d="M123.233 99.5762H122.386V100.424H123.233V99.5762Z" />{" "}
        <path d="M123.233 99.5762H122.386V100.424H123.233V99.5762Z" />{" "}
        <path d="M121.962 99.1524H121.114V100.848H121.962V99.1524Z" />{" "}
        <path d="M121.962 99.1524H121.114V100.848H121.962V99.1524Z" />{" "}
        <path d="M120.69 98.7285H119.843V101.272H120.69V98.7285Z" />{" "}
        <path d="M120.69 98.7285H119.843V101.272H120.69V98.7285Z" />{" "}
        <path d="M119.419 97.8809H118.571V102.119H119.419V97.8809Z" />{" "}
        <path d="M119.419 97.8809H118.571V102.119H119.419V97.8809Z" />{" "}
        <path d="M32.533 93.6426H33.3807V106.358H32.533V93.6426Z" />{" "}
        <path d="M32.533 93.6426H33.3807V106.358H32.533V93.6426Z" />{" "}
        <path d="M31.2615 92.3711H32.1092V107.629H31.2615V92.3711Z" />{" "}
        <path d="M31.2615 92.3711H32.1092V107.629H31.2615V92.3711Z" />{" "}
        <path d="M29.99 94.4902H30.8377V105.51H29.99V94.4902Z" />{" "}
        <path d="M29.99 94.4902H30.8377V105.51H29.99V94.4902Z" />{" "}
        <path d="M28.7185 96.1855H29.5662V103.815H28.7185V96.1855Z" />{" "}
        <path d="M28.7185 96.1855H29.5662V103.815H28.7185V96.1855Z" />{" "}
        <path d="M27.447 98.7285H28.2947V101.272H27.447V98.7285Z" />{" "}
        <path d="M27.447 98.7285H28.2947V101.272H27.447V98.7285Z" />{" "}
        <path d="M26.1755 97.8809H27.0232V102.119H26.1755V97.8809Z" />{" "}
        <path d="M26.1755 97.8809H27.0232V102.119H26.1755V97.8809Z" />{" "}
        <path d="M24.904 94.914H25.7517V105.086H24.904V94.914Z" />{" "}
        <path d="M24.904 94.914H25.7517V105.086H24.904V94.914Z" />{" "}
        <path d="M23.6325 90.2519H24.4802V109.748H23.6325V90.2519Z" />{" "}
        <path d="M23.6325 90.2519H24.4802V109.748H23.6325V90.2519Z" />{" "}
        <path d="M22.361 92.7949H23.2087V107.205H22.361V92.7949Z" />{" "}
        <path d="M22.361 92.7949H23.2087V107.205H22.361V92.7949Z" />{" "}
        <path d="M21.0895 90.2519H21.9372V109.748H21.0895V90.2519Z" />{" "}
        <path d="M21.0895 90.2519H21.9372V109.748H21.0895V90.2519Z" />{" "}
        <path d="M19.8181 94.0664H20.6657V105.934H19.8181V94.0664Z" />{" "}
        <path d="M19.8181 94.0664H20.6657V105.934H19.8181V94.0664Z" />{" "}
        <path d="M18.5466 98.3047H19.3942V101.695H18.5466V98.3047Z" />{" "}
        <path d="M18.5466 98.3047H19.3942V101.695H18.5466V98.3047Z" />{" "}
        <path d="M17.2751 99.5762H18.1227V100.424H17.2751V99.5762Z" />{" "}
        <path d="M17.2751 99.5762H18.1227V100.424H17.2751V99.5762Z" />{" "}
        <path d="M16.0036 99.1524H16.8512V100.848H16.0036V99.1524Z" />{" "}
        <path d="M16.0036 99.1524H16.8512V100.848H16.0036V99.1524Z" />{" "}
        <path d="M14.7321 97.0332H15.5797V102.967H14.7321V97.0332Z" />{" "}
        <path d="M14.7321 97.0332H15.5797V102.967H14.7321V97.0332Z" />{" "}
        <path d="M13.4606 96.1855H14.3082V103.815H13.4606V96.1855Z" />{" "}
        <path d="M13.4606 96.1855H14.3082V103.815H13.4606V96.1855Z" />{" "}
        <path d="M12.1891 94.0664H13.0367V105.934H12.1891V94.0664Z" />{" "}
        <path d="M12.1891 94.0664H13.0367V105.934H12.1891V94.0664Z" />{" "}
        <path d="M10.9176 90.2519H11.7652V109.748H10.9176V90.2519Z" />{" "}
        <path d="M10.9176 90.2519H11.7652V109.748H10.9176V90.2519Z" />{" "}
        <path d="M9.64608 93.6426H10.4937V106.358H9.64608V93.6426Z" />{" "}
        <path d="M9.64608 93.6426H10.4937V106.358H9.64608V93.6426Z" />{" "}
        <path d="M8.37458 94.4902H9.22225V105.51H8.37458V94.4902Z" />{" "}
        <path d="M8.37458 94.4902H9.22225V105.51H8.37458V94.4902Z" />{" "}
        <path d="M7.10309 95.3379H7.95075V104.662H7.10309V95.3379Z" />{" "}
        <path d="M7.10309 95.3379H7.95075V104.662H7.10309V95.3379Z" />{" "}
        <path d="M5.83159 94.4902H6.67926V105.51H5.83159V94.4902Z" />{" "}
        <path d="M5.83159 94.4902H6.67926V105.51H5.83159V94.4902Z" />{" "}
        <path d="M4.56009 93.2187H5.40776V106.781H4.56009V93.2187Z" />{" "}
        <path d="M4.56009 93.2187H5.40776V106.781H4.56009V93.2187Z" />{" "}
        <path d="M3.2886 96.1855H4.13626V103.815H3.2886V96.1855Z" />{" "}
        <path d="M3.2886 96.1855H4.13626V103.815H3.2886V96.1855Z" />{" "}
        <path d="M2.0171 98.3047H2.86477V101.695H2.0171V98.3047Z" />{" "}
        <path d="M2.0171 98.3047H2.86477V101.695H2.0171V98.3047Z" />{" "}
        <path d="M0.745605 99.1524H1.59327V100.848H0.745605V99.1524Z" />{" "}
        <path d="M0.745605 99.1524H1.59327V100.848H0.745605V99.1524Z" />{" "}
        <path d="M33.8045 96.6094H34.6522V103.391H33.8045V96.6094Z" />{" "}
        <path d="M33.8045 96.6094H34.6522V103.391H33.8045V96.6094Z" />{" "}
        <path d="M35.076 97.457H35.9237V102.543H35.076V97.457Z" />{" "}
        <path d="M35.076 97.457H35.9237V102.543H35.076V97.457Z" />{" "}
        <path d="M36.3475 97.8809H37.1952V102.119H36.3475V97.8809Z" />{" "}
        <path d="M36.3475 97.8809H37.1952V102.119H36.3475V97.8809Z" />{" "}
        <path d="M37.619 98.7285H38.4667V101.272H37.619V98.7285Z" />{" "}
        <path d="M37.619 98.7285H38.4667V101.272H37.619V98.7285Z" />{" "}
        <path d="M38.8905 99.5762H39.7382V100.424H38.8905V99.5762Z" />{" "}
        <path d="M38.8905 99.5762H39.7382V100.424H38.8905V99.5762Z" />{" "}
        <path d="M40.162 99.5762H41.0097V100.424H40.162V99.5762Z" />{" "}
        <path d="M40.162 99.5762H41.0097V100.424H40.162V99.5762Z" />{" "}
        <path d="M41.4335 99.5762H42.2812V100.424H41.4335V99.5762Z" />{" "}
        <path d="M41.4335 99.5762H42.2812V100.424H41.4335V99.5762Z" />{" "}
        <path d="M42.705 99.1524H43.5527V100.848H42.705V99.1524Z" />{" "}
        <path d="M42.705 99.1524H43.5527V100.848H42.705V99.1524Z" />{" "}
        <path d="M43.9765 98.7285H44.8242V101.272H43.9765V98.7285Z" />{" "}
        <path d="M43.9765 98.7285H44.8242V101.272H43.9765V98.7285Z" />{" "}
        <path d="M45.248 97.8809H46.0956V102.119H45.248V97.8809Z" />{" "}
        <path d="M45.248 97.8809H46.0956V102.119H45.248V97.8809Z" />{" "}
        <path d="M46.5195 95.3379H47.3671V104.662H46.5195V95.3379Z" />{" "}
        <path d="M46.5195 95.3379H47.3671V104.662H46.5195V95.3379Z" />{" "}
        <path d="M47.791 93.2187H48.6386V106.781H47.791V93.2187Z" />{" "}
        <path d="M47.791 93.2187H48.6386V106.781H47.791V93.2187Z" />{" "}
        <path d="M49.0625 94.0664H49.9101V105.934H49.0625V94.0664Z" />{" "}
        <path d="M49.0625 94.0664H49.9101V105.934H49.0625V94.0664Z" />{" "}
        <path d="M50.334 94.914H51.1816V105.086H50.334V94.914Z" />{" "}
        <path d="M50.334 94.914H51.1816V105.086H50.334V94.914Z" />{" "}
        <path d="M51.6055 94.0664H52.4531V105.934H51.6055V94.0664Z" />{" "}
        <path d="M51.6055 94.0664H52.4531V105.934H51.6055V94.0664Z" />{" "}
        <path d="M52.877 93.6426H53.7246V106.358H52.877V93.6426Z" />{" "}
        <path d="M52.877 93.6426H53.7246V106.358H52.877V93.6426Z" />{" "}
        <path d="M54.1485 91.9472H54.9961V108.053H54.1485V91.9472Z" />{" "}
        <path d="M54.1485 91.9472H54.9961V108.053H54.1485V91.9472Z" />{" "}
        <path d="M55.42 89.8281H56.2676V110.172H55.42V89.8281Z" />{" "}
        <path d="M55.42 89.8281H56.2676V110.172H55.42V89.8281Z" />{" "}
        <path d="M56.6914 93.6426H57.5391V106.358H56.6914V93.6426Z" />{" "}
        <path d="M56.6914 93.6426H57.5391V106.358H56.6914V93.6426Z" />{" "}
        <path d="M57.9629 96.1855H58.8106V103.815H57.9629V96.1855Z" />{" "}
        <path d="M57.9629 96.1855H58.8106V103.815H57.9629V96.1855Z" />{" "}
        <path d="M59.2344 97.0332H60.0821V102.967H59.2344V97.0332Z" />{" "}
        <path d="M59.2344 97.0332H60.0821V102.967H59.2344V97.0332Z" />{" "}
        <path d="M60.5059 99.1524H61.3536V100.848H60.5059V99.1524Z" />{" "}
        <path d="M60.5059 99.1524H61.3536V100.848H60.5059V99.1524Z" />{" "}
        <path d="M61.7774 98.3047H62.6251V101.695H61.7774V98.3047Z" />{" "}
        <path d="M61.7774 98.3047H62.6251V101.695H61.7774V98.3047Z" />{" "}
        <path d="M63.0489 94.0664H63.8966V105.934H63.0489V94.0664Z" />{" "}
        <path d="M63.0489 94.0664H63.8966V105.934H63.0489V94.0664Z" />{" "}
        <path d="M64.3204 90.2519H65.1681V109.748H64.3204V90.2519Z" />{" "}
        <path d="M64.3204 90.2519H65.1681V109.748H64.3204V90.2519Z" />{" "}
        <path d="M65.5919 92.7949H66.4396V107.205H65.5919V92.7949Z" />{" "}
        <path d="M65.5919 92.7949H66.4396V107.205H65.5919V92.7949Z" />{" "}
        <path d="M66.4396 90.2519H67.2873V109.748H66.4396V90.2519Z" />{" "}
        <path d="M66.4396 90.2519H67.2873V109.748H66.4396V90.2519Z" />{" "}
        <path d="M67.7111 92.7949H68.5587V107.205H67.7111V92.7949Z" />{" "}
        <path d="M67.7111 92.7949H68.5587V107.205H67.7111V92.7949Z" />{" "}
        <path d="M68.9826 94.914H69.8302V105.086H68.9826V94.914Z" />{" "}
        <path d="M68.9826 94.914H69.8302V105.086H68.9826V94.914Z" />{" "}
        <path d="M70.2541 97.457H71.1017V102.543H70.2541V97.457Z" />{" "}
        <path d="M70.2541 97.457H71.1017V102.543H70.2541V97.457Z" />{" "}
        <path d="M71.5256 98.3047H72.3732V101.695H71.5256V98.3047Z" />{" "}
        <path d="M71.5256 98.3047H72.3732V101.695H71.5256V98.3047Z" />{" "}
        <path d="M72.3732 96.1855H73.2209V103.815H72.3732V96.1855Z" />{" "}
        <path d="M72.3732 96.1855H73.2209V103.815H72.3732V96.1855Z" />{" "}
        <path d="M73.6447 94.4902H74.4924V105.51H73.6447V94.4902Z" />{" "}
        <path d="M73.6447 94.4902H74.4924V105.51H73.6447V94.4902Z" />{" "}
        <path d="M74.9162 92.3711H75.7639V107.629H74.9162V92.3711Z" />{" "}
        <path d="M74.9162 92.3711H75.7639V107.629H74.9162V92.3711Z" />{" "}
        <path d="M76.1877 93.6426H77.0354V106.358H76.1877V93.6426Z" />{" "}
        <path d="M76.1877 93.6426H77.0354V106.358H76.1877V93.6426Z" />{" "}
        <path d="M77.0354 96.6094H77.8831V103.391H77.0354V96.6094Z" />{" "}
        <path d="M77.0354 96.6094H77.8831V103.391H77.0354V96.6094Z" />{" "}
        <path d="M78.3069 97.0332H79.1546V102.967H78.3069V97.0332Z" />{" "}
        <path d="M78.3069 97.0332H79.1546V102.967H78.3069V97.0332Z" />{" "}
        <path d="M79.5784 97.8809H80.426V102.119H79.5784V97.8809Z" />{" "}
        <path d="M79.5784 97.8809H80.426V102.119H79.5784V97.8809Z" />{" "}
        <path d="M80.426 98.7285H81.2737V101.272H80.426V98.7285Z" />{" "}
        <path d="M80.426 98.7285H81.2737V101.272H80.426V98.7285Z" />{" "}
        <path d="M81.6975 99.1524H82.5452V100.848H81.6975V99.1524Z" />{" "}
        <path d="M81.6975 99.1524H82.5452V100.848H81.6975V99.1524Z" />{" "}
        <path d="M82.969 99.5762H83.8167V100.424H82.969V99.5762Z" />{" "}
        <path d="M82.969 99.5762H83.8167V100.424H82.969V99.5762Z" />{" "}
        <path d="M84.2405 99.5762H85.0882V100.424H84.2405V99.5762Z" />{" "}
        <path d="M84.2405 99.5762H85.0882V100.424H84.2405V99.5762Z" />{" "}
        <path d="M85.512 99.5762H86.3597V100H85.512V99.5762Z" />{" "}
        <path d="M85.512 99.5762H86.3597V100H85.512V99.5762Z" />{" "}
        <path d="M86.7835 99.5762H87.6312V100.424H86.7835V99.5762Z" />{" "}
        <path d="M86.7835 99.5762H87.6312V100.424H86.7835V99.5762Z" />{" "}
        <path d="M88.055 99.1524H88.9027V100.848H88.055V99.1524Z" />{" "}
        <path d="M88.055 99.1524H88.9027V100.848H88.055V99.1524Z" />{" "}
        <path d="M89.3265 98.7285H90.1742V101.272H89.3265V98.7285Z" />{" "}
        <path d="M89.3265 98.7285H90.1742V101.272H89.3265V98.7285Z" />{" "}
        <path d="M90.598 97.8809H91.4457V102.119H90.598V97.8809Z" />{" "}
        <path d="M90.598 97.8809H91.4457V102.119H90.598V97.8809Z" />{" "}
      </g>{" "}
      <g filter="url(#filter0_dd_200_1496)" className="animate-pulse">
        {" "}
        <ellipse
          cx="105.008"
          cy="100"
          rx="13.5626"
          ry="13.5626"
          fill="#080808"
          fillOpacity="0.01"
          shapeRendering="crispEdges"
        />{" "}
      </g>{" "}
      <g clipPath="url(#clip0_200_1496)">
        {" "}
        <rect
          x="91.4453"
          y="86.4374"
          width="27.1253"
          height="27.1252"
          rx="13.5626"
          fill="#181818"
          fillOpacity="0.08"
        />{" "}
        <g filter="url(#filter1_f_200_1496)">
          {" "}
          <circle cx="105" cy="113" r="12" fill="#16E390" />{" "}
        </g>{" "}
        <rect
          x="106.551"
          y="100.212"
          width="1.16636"
          height="2.91591"
          rx="0.583182"
          transform="rotate(-15 106.551 100.212)"
          fill="white"
        />{" "}
        <rect
          x="105.932"
          y="98.7043"
          width="1.16636"
          height="2.91591"
          rx="0.583182"
          transform="rotate(-75 105.932 98.7043)"
          fill="white"
        />{" "}
        <rect
          x="104.343"
          y="98.5981"
          width="1.16636"
          height="2.91591"
          rx="0.583182"
          transform="rotate(-135 104.343 98.5981)"
          fill="white"
        />{" "}
        <rect
          x="104.491"
          y="95.6736"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(-135 104.491 95.6736)"
          fill="white"
        />{" "}
        <rect
          x="104.669"
          y="93.4414"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(-135 104.669 93.4414)"
          fill="white"
        />{" "}
        <rect
          x="107.999"
          y="94.1746"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(-105 107.999 94.1746)"
          fill="white"
        />{" "}
        <rect
          x="110.517"
          y="96.4444"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(-75 110.517 96.4444)"
          fill="white"
        />{" "}
        <rect
          x="111.566"
          y="99.6617"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(-45 111.566 99.6617)"
          fill="white"
        />{" "}
        <rect
          x="110.867"
          y="102.991"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(-15 110.867 102.991)"
          fill="white"
        />{" "}
        <rect
          x="108.597"
          y="105.509"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(15 108.597 105.509)"
          fill="white"
        />{" "}
        <rect
          x="105.346"
          y="106.559"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(45 105.346 106.559)"
          fill="white"
        />{" "}
        <rect
          x="102.026"
          y="105.859"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(75 102.026 105.859)"
          fill="white"
        />{" "}
        <rect
          x="99.5088"
          y="103.589"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(105 99.5088 103.589)"
          fill="white"
        />{" "}
        <rect
          x="98.4492"
          y="100.338"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(135 98.4492 100.338)"
          fill="white"
        />{" "}
        <rect
          x="99.1821"
          y="97.0188"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(165 99.1821 97.0188)"
          fill="white"
        />{" "}
        <rect
          x="101.452"
          y="94.5013"
          width="0.637996"
          height="1.59499"
          rx="0.318998"
          transform="rotate(-165 101.452 94.5013)"
          fill="white"
        />{" "}
        <rect
          x="106.808"
          y="95.9647"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(-105 106.808 95.9647)"
          fill="white"
        />{" "}
        <rect
          x="108.534"
          y="97.3781"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(-75 108.534 97.3781)"
          fill="white"
        />{" "}
        <rect
          x="109.35"
          y="99.5996"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(-45 109.35 99.5996)"
          fill="white"
        />{" "}
        <rect
          x="109"
          y="101.771"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(-15 109 101.771)"
          fill="white"
        />{" "}
        <rect
          x="107.587"
          y="103.643"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(15 107.587 103.643)"
          fill="white"
        />{" "}
        <rect
          x="105.424"
          y="104.459"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(45 105.424 104.459)"
          fill="white"
        />{" "}
        <rect
          x="103.194"
          y="104.109"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(75 103.194 104.109)"
          fill="white"
        />{" "}
        <rect
          x="101.439"
          y="102.579"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(105 101.439 102.579)"
          fill="white"
        />{" "}
        <rect
          x="100.564"
          y="100.533"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(135 100.564 100.533)"
          fill="white"
        />{" "}
        <rect
          x="100.973"
          y="98.3033"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(165 100.973 98.3033)"
          fill="white"
        />{" "}
        <rect
          x="102.386"
          y="96.4317"
          width="0.880096"
          height="2.20024"
          rx="0.440048"
          transform="rotate(-165 102.386 96.4317)"
          fill="white"
        />{" "}
        <rect
          x="103.417"
          y="99.811"
          width="1.16636"
          height="2.91591"
          rx="0.583182"
          transform="rotate(165 103.417 99.811)"
          fill="white"
        />{" "}
        <rect
          x="104.071"
          y="101.248"
          width="1.16636"
          height="2.91591"
          rx="0.583182"
          transform="rotate(105 104.071 101.248)"
          fill="white"
        />{" "}
        <rect
          x="105.581"
          y="101.543"
          width="1.16636"
          height="2.91591"
          rx="0.583182"
          transform="rotate(45 105.581 101.543)"
          fill="white"
        />{" "}
      </g>{" "}
      <rect
        x="13.6807"
        y="170.875"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        fill="#1A1A1A"
      />{" "}
      <rect
        x="13.6807"
        y="170.875"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="#303030"
      />{" "}
      <rect
        x="13.6807"
        y="170.875"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="url(#paint292_linear_200_1496)"
      />{" "}
      <rect
        x="67.5674"
        y="141.86"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        fill="#1A1A1A"
      />{" "}
      <rect
        x="67.5674"
        y="141.86"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="#303030"
      />{" "}
      <rect
        x="67.5674"
        y="141.86"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="url(#paint293_linear_200_1496)"
      />{" "}
      <rect
        x="178.448"
        y="15.4348"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        fill="#1A1A1A"
      />{" "}
      <rect
        x="178.448"
        y="15.4348"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="#303030"
      />{" "}
      <rect
        x="178.448"
        y="15.4348"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="url(#paint294_linear_200_1496)"
      />{" "}
      <rect
        x="127.152"
        y="43.9322"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        fill="#1A1A1A"
      />{" "}
      <rect
        x="127.152"
        y="43.9322"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="#303030"
      />{" "}
      <rect
        x="127.152"
        y="43.9322"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="url(#paint295_linear_200_1496)"
      />{" "}
      <rect
        x="60.8311"
        y="1.96329"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        fill="#1A1A1A"
      />{" "}
      <rect
        x="60.8311"
        y="1.96329"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="#303030"
      />{" "}
      <rect
        x="60.8311"
        y="1.96329"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="url(#paint296_linear_200_1496)"
      />{" "}
      <rect
        x="24.0439"
        y="50.668"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        fill="#1A1A1A"
      />{" "}
      <rect
        x="24.0439"
        y="50.668"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="#303030"
      />{" "}
      <rect
        x="24.0439"
        y="50.668"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="url(#paint297_linear_200_1496)"
      />{" "}
      <rect
        x="150.469"
        y="160.513"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        fill="#1A1A1A"
      />{" "}
      <rect
        x="150.469"
        y="160.513"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="#303030"
      />{" "}
      <rect
        x="150.469"
        y="160.513"
        width="19.7254"
        height="19.7254"
        rx="3.5"
        stroke="url(#paint298_linear_200_1496)"
      />{" "}
      <defs>
        {" "}
        <filter
          id="filter0_dd_200_1496"
          x="51.4453"
          y="46.4374"
          width="107.125"
          height="107.125"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          {" "}
          <feFlood floodOpacity="0" result="BackgroundImageFix" />{" "}
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />{" "}
          <feOffset /> <feGaussianBlur stdDeviation="20" />{" "}
          <feComposite in2="hardAlpha" operator="out" />{" "}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.227451 0 0 0 0 0.290196 0 0 0 0 0.858824 0 0 0 0.72 0"
          />{" "}
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_200_1496"
          />{" "}
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />{" "}
          <feOffset /> <feGaussianBlur stdDeviation="20" />{" "}
          <feComposite in2="hardAlpha" operator="out" />{" "}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.227451 0 0 0 0 0.290196 0 0 0 0 0.858824 0 0 0 0.56 0"
          />{" "}
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_200_1496"
            result="effect2_dropShadow_200_1496"
          />{" "}
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_200_1496"
            result="shape"
          />{" "}
        </filter>{" "}
        <filter
          id="filter1_f_200_1496"
          x="73"
          y="81"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          {" "}
          <feFlood floodOpacity="0" result="BackgroundImageFix" />{" "}
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />{" "}
          <feGaussianBlur
            stdDeviation="10"
            result="effect1_foregroundBlur_200_1496"
          />{" "}
        </filter>{" "}
        <linearGradient
          id="paint0_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint1_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint2_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint3_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint4_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint5_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint6_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint7_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint8_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint9_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint10_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint11_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint12_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint13_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint14_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint15_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint16_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint17_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint18_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint19_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint20_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint21_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint22_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint23_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint24_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint25_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint26_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint27_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint28_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint29_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint30_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint31_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint32_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint33_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint34_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint35_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint36_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint37_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint38_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint39_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint40_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint41_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint42_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint43_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint44_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint45_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint46_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint47_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint48_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint49_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint50_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint51_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint52_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint53_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint54_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint55_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint56_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint57_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint58_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint59_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint60_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint61_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint62_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint63_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint64_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint65_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint66_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint67_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint68_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint69_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint70_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint71_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint72_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint73_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint74_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint75_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint76_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint77_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint78_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint79_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint80_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint81_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint82_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint83_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint84_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint85_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint86_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint87_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint88_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint89_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint90_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint91_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint92_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint93_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint94_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint95_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint96_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint97_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint98_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint99_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint100_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint101_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint102_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint103_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint104_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint105_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint106_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint107_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint108_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint109_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint110_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint111_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint112_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint113_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint114_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint115_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint116_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint117_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint118_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint119_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint120_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint121_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint122_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint123_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint124_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint125_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint126_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint127_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint128_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint129_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint130_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint131_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint132_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint133_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint134_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint135_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint136_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint137_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint138_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint139_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint140_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint141_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint142_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint143_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint144_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint145_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint146_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint147_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint148_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint149_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint150_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint151_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint152_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint153_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint154_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint155_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint156_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint157_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint158_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint159_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint160_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint161_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint162_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint163_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint164_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint165_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint166_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint167_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint168_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint169_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint170_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint171_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint172_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint173_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint174_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint175_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint176_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint177_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint178_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint179_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint180_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint181_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint182_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint183_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint184_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint185_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint186_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint187_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint188_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint189_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint190_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint191_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint192_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint193_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint194_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint195_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint196_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint197_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint198_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint199_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint200_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint201_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint202_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint203_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint204_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint205_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint206_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint207_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint208_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint209_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint210_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint211_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint212_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint213_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint214_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint215_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint216_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint217_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint218_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint219_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint220_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint221_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint222_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint223_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint224_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint225_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint226_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint227_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint228_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint229_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint230_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint231_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint232_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint233_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint234_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint235_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint236_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint237_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint238_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint239_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint240_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint241_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint242_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint243_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint244_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint245_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint246_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint247_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint248_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint249_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint250_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint251_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint252_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint253_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint254_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint255_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint256_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint257_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint258_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint259_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint260_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint261_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint262_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint263_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint264_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint265_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint266_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint267_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint268_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint269_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint270_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint271_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint272_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint273_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint274_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint275_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint276_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint277_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint278_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint279_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint280_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint281_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint282_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint283_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint284_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint285_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint286_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint287_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint288_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint289_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint290_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208.079"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.05" stopColor="white" stopOpacity="0" />{" "}
          <stop offset="0.1" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.45" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.55" stopColor="white" stopOpacity="0.48" />{" "}
          <stop offset="0.9" stopColor="white" stopOpacity="0.1" />{" "}
          <stop offset="0.95" stopColor="white" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint291_linear_200_1496"
          x1="0.745605"
          y1="100"
          x2="208"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.25" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="0.27" stopColor="#16E390" />{" "}
          <stop offset="0.31" stopColor="#16E390" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#16E390" stopOpacity="0" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint292_linear_200_1496"
          x1="27.4294"
          y1="176.593"
          x2="33.9061"
          y2="170.375"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#3A4ADB" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#3A4ADB" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint293_linear_200_1496"
          x1="84.4249"
          y1="148.873"
          x2="87.7928"
          y2="141.36"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#3A4ADB" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#3A4ADB" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint294_linear_200_1496"
          x1="181.316"
          y1="31.7742"
          x2="177.948"
          y2="35.6602"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#3A4ADB" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#3A4ADB" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint295_linear_200_1496"
          x1="130.538"
          y1="56.1265"
          x2="126.652"
          y2="64.1576"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#3A4ADB" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#3A4ADB" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint296_linear_200_1496"
          x1="73.5435"
          y1="15.9711"
          x2="75.8751"
          y2="22.1887"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#3A4ADB" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#3A4ADB" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint297_linear_200_1496"
          x1="36.7564"
          y1="67.0074"
          x2="44.2693"
          y2="70.8934"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#3A4ADB" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#3A4ADB" />{" "}
        </linearGradient>{" "}
        <linearGradient
          id="paint298_linear_200_1496"
          x1="155.927"
          y1="168.821"
          x2="149.969"
          y2="160.013"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#3A4ADB" stopOpacity="0" />{" "}
          <stop offset="1" stopColor="#3A4ADB" />{" "}
        </linearGradient>{" "}
        <clipPath id="clip0_200_1496">
          {" "}
          <rect
            x="91.4453"
            y="86.4374"
            width="27.1253"
            height="27.1252"
            rx="13.5626"
            fill="white"
          />{" "}
        </clipPath>{" "}
      </defs>{" "}
    </svg>
  );
};

export default PersonalAI;
